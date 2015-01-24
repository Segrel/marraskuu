var NovemberCounter = React.createClass({
  updateInterval: 1000,
  duration: null,

  getInitialState: function() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },

  componentDidMount: function() {
    var now = moment();
    var november = this.nextNovember(now);
    var diff = november.unix() - now.unix();

    this.startUpdateLoop(moment.duration(diff * 1000, 'milliseconds'));
  },

  componentWillUnmount: function() {
    clearInterval(this.updateLoopTimer);
  },

  render: function() {
    return (
      <div className="one countdown fade-in">
        {this.state.days} päivää {this.state.hours} tuntia {this.state.minutes} minuuttia ja {this.state.seconds} sekuntia
      </div>
    );
  },

  nextNovember: function(date) {
    var november = date.clone().startOf('month').month('november');
    return november > date ? november : november.add(1, 'years');
  },

  startUpdateLoop: function(initialDuration) {
    this.duration = initialDuration;
    this.updateTime();
    this.updateLoopTimer = setInterval(this.updateTime.bind(this), this.updateInterval);
  },

  updateTime: function() {
    this.duration = moment.duration(this.duration - this.updateInterval, 'milliseconds');
    this.setState({
      days: Math.floor(this.duration.asDays()),
      hours: this.duration.hours(),
      minutes: this.duration.minutes(),
      seconds: this.duration.seconds()
    });
  }
});
