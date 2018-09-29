const React = require('react');

const EggList = (props) => {
  return (
    <ul>
    {props.eggs.map((egg, i) => <EasterEgg key = {i} name = {egg} />)}
    </ul>
  );
};

const EasterEgg = (props) => <li>{props.name}</li>;