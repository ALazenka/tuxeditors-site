import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class Discussions extends Component {
  render() {
    return (
      <center>
        <h3 id="discussions">Discussions</h3>
        <h4>Meeting #1 - Sept 28:</h4>
        <p>Discussed website design and layout. Git and version control was taught to unfamiliar members.</p>
        <h4>Meeting #2 - October 4:</h4>
        <p>Created architecture diagram what we hypthothesized.</p>
        <h4>Meeting #3 - October 12:</h4>
        <p>Assigned which part of report/presentation each team member is responsible for.</p>
        <h4>Meeting #4 - October 15:</h4>
        <p>Shared assigned work, and consolidated knowledge and feedback. Created presentation slides.</p>
        <h4>Meeting #5 - October 18:</h4>
        <p>Practiced presentation and gave each other feedback.</p>
        <h4>Meeting #6 - October 22:</h4>
        <p>Congregated inidividual report sections, and proofread each others’ work.</p>
      </center>
    );
  }
}


export default Discussions;
