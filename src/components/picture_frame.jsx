var PictureFrame = React.createClass({
  render: function() {
    var pictureClasses = 'picture-container';

    // todo
    pictureClasses += ' picture-beijing';

    return (
      <div className={pictureClasses}></div>
    );
  }
});