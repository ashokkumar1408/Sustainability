import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#0d5695" : "white")};
  color: ${(props) => (props.primary ? "white" : "#0d5695")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: #0d5695;
  border-radius: 3px;
`;

class Home extends Component {
  render() {
    return (
      <div className="form">
        <div >
          <div className="header">
            <h2>Sustainable Living</h2>
          </div>
          <div className="tealcontainer" >
            <p>
              <h3>Did you know?</h3>
            </p>
            <p>
            Turn it off - Leaving your electricals on standby needlessly uses up energy.
            Switching it off reduces your carbon
            footprint and cuts down your energy bills!
            </p>
          </div>
          <div className="bluecontainer">
          <h3>Know your Suatainability Score</h3>
          <Link to="/signup" className="btn btn-primary">Click Here</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
