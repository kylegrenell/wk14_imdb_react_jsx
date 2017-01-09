var React = require('react');

var Film = React.createClass({

  render(){
    return(
      <div className='film'>
      <p className='film-name'>
      {this.props.name}
      </p>
      <p>{this.props.children}</p>
      </div>
      )
  }

});

module.exports = Film;