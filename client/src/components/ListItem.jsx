var React = require('react');
var Film = require('./Film.jsx');

var ListItem = React.createClass({

  render(){
        var films = this.props.data.map(function(film){
          return(
            <Film name={film.name} url={film.url} key={film.id}>
            </Film>)
          });

    // Displaying the contents of the Array 
        return (
          <div className='film-list'> {films}  
          </div>
          )
      }
    });

module.exports = ListItem;