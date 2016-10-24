var App = function() {
  if (moment().get('month') === 10) {
    document.getElementById('body').className += 'invert';
  }
  React.render(<MainTitle />, document.querySelector('.main-container'));
};
