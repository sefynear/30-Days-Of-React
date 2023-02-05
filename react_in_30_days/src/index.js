import React from 'react';
import ReactDOM from 'react-dom';
import htmlImage from './images/html.avif'; 
import cssImage from './images/css.png'; 
import jsImage from './images/js.png'; 

//JSX element
const welcome = 'Welcome to 30 Days Of React';
const title = 'Getting Started React';
const subtitle = 'JavaScript Library';
const techs = ['HTML', 'CSS', 'JS'];
const techsFormated = techs.map((tech) => <li>{tech}</li>);

//form Style
const formSubscribeStyles = {
  textAlign: 'center',
  display: 'inline-block',
  marginTop: 50,
};

//main Style
const mainStyles = {
  backgroundColor: '#F3F0F5',
};

//footer Style
const footerStyles = {
  backgroundColor: '#61DBFB',
};
//header Style
const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
};
//button Style
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0',
  border: 'none',
  borderRadius: 5,
}

//header using JSX
const Header = () => (
  <header style={headerStyles}>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
  </header>
);

//main using JSX
const Main = () => (
  <main style={mainStyles}>
    <p>Prerequisite to get started {' '}
      <strong>
        <em>react.js</em>
      </strong>
    </p>
    <ul>
      {techsFormated}
      <img src={htmlImage} alt="html" style={{height:'100px', width:'100px'}}></img>
      <img src={cssImage} alt="css" style={{height:'100px', width:'100px'}}></img>
      <img src={jsImage} alt="js" style={{height:'100px', width:'100px'}}></img>
    </ul>
    <div style={formSubscribeStyles}>
      <h1>Subscribe</h1>
      <p>Sign up with your email adress to receive news and updates</p>
      <form id="formSubscribe">
        <input type="text" placeholder="First Name" id="firstName" name="firstName"></input>
        <input type="text" placeholder="Last Name" id="lastName" name="lastName"></input>
        <input type="mail" placeholder="Email" id="email" name="email"></input>
        <button type="submit" style={buttonStyles}>Submit</button>
      </form>
    </div>
  </main>
);

//footer using JSX
const Footer = () => (
  <footer style={footerStyles}>
    <p>Copyright 2023</p>
  </footer>
);

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
};

const HexaColor = () => (
  <div style={{backgroundColor:hexaColor()}}>{hexaColor()}</div>
);
//app container
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <HexaColor />
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
//ReactDOM.render([header, main, footer], rootElement);