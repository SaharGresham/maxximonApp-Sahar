import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customer from './components/customer.js';
import Client from './components/client.js';
import Navbar from 'react-bootstrap/Navbar';
import aztec from './aztec-calendar.svg';
import evolveU from './EvolveU+Final.jpg'
import evolveU1 from './EvolveU-logo-white.png'
import evolveU2 from './EvolveU-Favicon.png'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCustomer: true
    }

  }
  handleClick() {
    this.setState({ "isCustomer": !this.state.isCustomer })
  }
  render() {
    return (
      <div className="Container">
        
        <Navbar fixed="top" >
          
            
              <Navbar.Brand href="#home">Maximón</Navbar.Brand>
              <img src={evolveU2} className="App-image" />
              <div className="navText"> 
              protecting health through contact tracing
             
            
          </div>

          
        </Navbar>
        {this.state.isCustomer === true &&
          <div>
            <Customer />
          </div>
        }
        {this.state.isCustomer === false &&
          <div>
            <Client />
          </div>
        }
        <button onClick={() => this.handleClick()} >Toggle</button>
      </div>
    )
  };
}

export default App;
