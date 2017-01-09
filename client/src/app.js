var React = require('react');
var ReactDOM = require('react-dom');
var ListBox = require('./Components/ListBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <ListBox />,
    document.getElementById('app')
  );
}
