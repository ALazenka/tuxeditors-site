/** Fancy animated banner logo with tuxedo and axes. */

import React, { Component } from 'react';

import './BannerLogo.css';

class BannerLogo extends Component {
  render() {
    return (
      <div id="banner-logo">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-78 134 246 246" className="sa-logo">
          <title>Suit & Axe</title>
          <desc>Designer shirts for tall men</desc>

          <g id="sa-identity">
            <g id="axe" className="axe">
              <path id="right" className="st1" d="M9.3,201.2c-1.2-2.1-5.4-9.2-5.4-9.2s-2.6,1.1-4.6,2
                c-0.3,0.1-0.9,0.4-1.6,0.8c-0.4-0.7-0.6-1.2-0.6-1.2s-5.7,2.8-7.9,3.9c-2.2,1.1-7.7,4.5-7.7,4.5s0.2,0.3,0.5,0.9
                c-2.7,1.5-10.1,6.1-14.7,8.1c-4.7,2.1-12.7,5.5-12.7,5.5s2.7,4.6,3.5,6c0.8,1.4,1.4,2.5,7.1,10.3c5.7,7.8,11.9,13.4,11.9,13.4
                s3.8-8.7,4.9-14.3c1.1-5.7,3.2-10.6,3.9-11.7c0.7-1.1,1.9-1.2,3.2-2c0.2-0.1,0.5-0.3,0.8-0.5c0.4,0.7,0.6,1.2,0.9,1.6
                c1.6,2.9,10.5,19.4,19,33.7c4.8,8.1,12.6,20,18.9,29.7c4.8,7.3,8.7,13.3,10,15.5c3,5,11.4,19.3,14.3,25.7c1.5,3.4,3,10.4,3.7,13.7
                c0.6,3.3,1.2,7.3,2.1,8.9c0.9,1.6,15.4,4.4,16.8,3.5c1.5-0.9,1.4-3.1,1.4-4.6c0-1.5-5.7-10.6-9.8-19.4c-4.1-8.8-18.6-34-20.2-36.8
                c-0.8-1.4-4.3-6.7-8.1-12.4c-4-6.1-8.3-12.6-9.6-14.8c-17.4-28.9-14.1-29.4-15.2-32.6c-1.1-3.2-3.3-13.9-3.8-14.8
                c-0.5-1-3.6-3.8-4.3-4.9c-0.1-0.1-0.2-0.3-0.3-0.5c3.1-1.4,5.8-2.5,5.8-2.5S10.5,203.3,9.3,201.2L9.3,201.2z"/>
                <path id="left" className="st1" d="M80.7,201.2c1.2-2.1,5.4-9.2,5.4-9.2s2.6,1.1,4.6,2
                c0.3,0.1,0.9,0.4,1.6,0.8c0.4-0.7,0.6-1.2,0.6-1.2s5.7,2.8,7.9,3.9c2.2,1.1,7.7,4.5,7.7,4.5s-0.2,0.3-0.5,0.9
                c2.7,1.5,10.1,6.1,14.7,8.1c4.7,2.1,12.7,5.5,12.7,5.5s-2.7,4.6-3.5,6c-0.8,1.4-1.4,2.5-7.1,10.3c-5.7,7.8-11.9,13.4-11.9,13.4
                s-3.8-8.7-4.9-14.3c-1.1-5.7-3.2-10.6-3.9-11.7c-0.7-1.1-1.9-1.2-3.2-2c-0.2-0.1-0.5-0.3-0.8-0.5c-0.4,0.7-0.6,1.2-0.9,1.6
                c-1.6,2.9-10.5,19.4-19,33.7c-4.8,8.1-12.6,20-18.9,29.7c-4.8,7.3-8.7,13.3-10,15.5c-3,5-11.4,19.3-14.3,25.7
                c-1.5,3.4-3,10.4-3.7,13.7c-0.6,3.3-1.2,7.3-2.1,8.9c-0.9,1.6-15.4,4.4-16.8,3.5c-1.5-0.9-1.4-3.1-1.4-4.6
                c0-1.5,5.7-10.6,9.8-19.4c4.1-8.8,18.6-34,20.2-36.8c0.8-1.4,4.3-6.7,8.1-12.4c4-6.1,8.3-12.6,9.6-14.8
                c17.4-28.9,14.1-29.4,15.2-32.6c1.1-3.2,3.3-13.9,3.8-14.8c0.5-1,3.6-3.8,4.3-4.9c0.1-0.1,0.2-0.3,0.3-0.5
                c-3.1-1.4-5.8-2.5-5.8-2.5S79.5,203.3,80.7,201.2L80.7,201.2z"
              />
            </g>
            <g id="buttons" className="buttons">
              <circle id="bottom" className="st1 buttons" cx="45" cy="254" r="5" />
              <circle id="middle" className="st1 buttons" cx="45" cy="229" r="5" />
              <circle id="top" className="st1 buttons" cx="45" cy="204" r="5" />
            </g>
            <g id="bow-tie" className="bowtie">
              <path id="middle-bow" className="st1 bowtie" d="M39,174h12c1.1,0,2,0.9,2,2v7c0,1.1-0.9,2-2,2H39
                c-1.1,0-2-0.9-2-2v-7C37,174.9,37.9,174,39,174z"
              />
              <path id="right-bow" className="st1 bowtie" d="M71.2,165.9c1-0.5,1.8,0,1.8,1.1v25c0,1.1-0.8,1.6-1.8,1.1
                l-16.3-8.6c-0.5-0.3-0.9-0.9-0.9-1.5v-7c0-0.6,0.4-1.2,0.9-1.5L71.2,165.9z"
              />
              <path id="left-bow" className="st1 bowtie" d="M17,192c0,1.1,0.8,1.6,1.8,1.1l16.3-8.6c0.5-0.3,0.9-0.9,0.9-1.5
                v-7c0-0.6-0.4-1.2-0.9-1.5l-16.3-8.6c-1-0.5-1.8,0-1.8,1.1V192z"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default BannerLogo;
