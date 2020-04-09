// import React from 'react';
// import logo from './logo.svg';
// import Header from './components/header'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import PropTypes from 'prop-types';
import React from 'react';
import Hero from './components/hero';
import Container from './components/container';
import Row from './components/row';
import Col from './components/col';
import Tracker from './components/trackerComponent.jsx';

function App() {
  return (
    <Tracker>
    <div>
      <Hero backgroundImage="https://i.imgur.com/8nobt23.jpg">
        <h1>Employee Directory</h1>
        <h2>Click on carrots to filter by heading </h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Employee Directory</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
              at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
              nisi gravida. Duis eget vestibulum quam, ut porttitor sem. Donec
              sagittis mi sollicitudin turpis semper, et interdum risus
              lobortis. Vestibulum suscipit nunc non egestas tristique. Proin
              hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus
              tortor sit amet, volutpat nisl. Ut et turpis non nunc maximus
              mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet
              cursus. Praesent suscipit orci neque, vestibulum tincidunt augue
              tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
           
        
          </Col>
        </Row>
      </Container>
    </div>
    </Tracker>
  );
}

export default App;
