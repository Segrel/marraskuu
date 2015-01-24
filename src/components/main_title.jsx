var NovemberFallback = React.createClass({
  render: function() {
    return (
      <div className="partytime-container hide">
        <div className="main-text">Nyt on marraskuu</div>
      </div>
    );
  }
});

var MainTitle = React.createClass({
  render: function() {
    var counterOrFallback;
    if (moment().get('month') === 10) {
      counterOrFallback = <NovemberFallback />;
    } else {
      counterOrFallback = <NovemberCounter />;
    }

    return (
      <div>
        <div>
          <div className="main-text">Kohta on marraskuu</div>
        </div>
        {counterOrFallback}
      </div>
    );
  }
});
