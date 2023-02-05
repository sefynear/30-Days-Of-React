import React from 'react';
import ReactDOM from 'react-dom';
import chapeauPaille from './images/chapeauPaille.jpg';


//JSX element
const welcome = 'Welcome to 30 Days Of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const techs = ['HTML', 'CSS', 'JS'];
const techsFormated = techs.map((tech) => <li>{tech}</li>);
const user= (
  <div>
    <img src={chapeauPaille} alt='chapeau de paille' style={{height:"100%", width:"100%"}}/>
  </div>
);

//header Style
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
};

//header using JSX
const header = (
  <header style={headerStyles}>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
  </header>
);

//main Style
const mainStyles = {
  backgroundColor: '#F3F0F5',
};

//main using JSX
const main = (
  <main style={mainStyles}>
    <p>Prerequisite to get started {' '}
      <strong>
        <em>react.js</em>
      </strong>
    </p>
    <ul>
      {techsFormated}
    </ul>
    {user}
  </main>
);

//footer Style
const footerStyles = {
  backgroundColor: '#61DBFB',
};

//footer using JSX
const footer = (
  <footer style={footerStyles}>
    <p>Copyright 2023</p>
  </footer>
);

//app container
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
//ReactDOM.render([header, main, footer], rootElement);