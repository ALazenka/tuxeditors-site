import React, { Component } from 'react';

class Proposed extends Component {
  render() {
    return (
      <center>
        <h3>Proposed Feature</h3>
        <h5>
          <a 
            href="https://docs.google.com/presentation/d/1IqXnMQVmi8eISiBTxTz3PSmWAz_VnjJoLcP6F3J7w2c/edit?usp=sharing"
            target="_blank"
          >
            Presentation Slides
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://docs.google.com/document/d/1jucP8SnEJ53rzGtTXKkX0DWHLqFtsBj5FdCe1K_oOz4/edit?usp=sharing"
            target="_blank"
          >
            Report
          </a>
        </h5>
        <iframe 
          title="TuxeditorsConceptualArchitecture"
          src="https://docs.google.com/presentation/d/e/2PACX-1vSe9NtpKXwrVy9FiSqmSj84MwOklDDnVX3XK1x5voPaJEJc55LStWRwt76c98_aT2oDSTbuFqUsEaJC/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="480"
          height="299"
          allowFullScreen="true"
        />
      </center>
    );
  }
}

export default Proposed;
