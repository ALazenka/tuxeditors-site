import React, { Component } from 'react';
import axios from 'axios';
import './CommitList.css';
import { Alert, Button, Well } from 'react-bootstrap';

const monthNames = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
];

const dayOfMonth = [
  '1st', '2nd', '3rd',
  '4th', '5th', '6th',
  '7th', '8th', '9th',
  '10th', '11th', '12th',
  '13th', '14th', '15th',
  '16th', '17th', '18th',
  '19th', '20th', '21st',
  '22nd', '23rd', '24th',
  '25th', '26th', '27th',
  '28th', '29th', '30th',
  '31st'
];

const minute = 60;
const hour = minute * 60;
const day = hour * 24;

class CommitList extends Component {

  constructor() {
    super();
    this.state = {
      loadingCommits: false,
      commitList: [],
      rateLimitError: false,
      showWarning: false,
      errorInfo: {}
    }
  }
  
  _formatDateToRead(date) {
    const dateInfo = monthNames[date.getMonth()] + ' ' + dayOfMonth[date.getDate()] + ' ' + date.getFullYear();
    const timeInfo = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return dateInfo + ' at ' + timeInfo;
  }
  
  _friendlyDate(d) {
    const date = new Date(d.replace(' ', 'T'));
    const delta = Math.round((+new Date() - date) / 1000);
  
    let result;
    if (delta < 30) {
      result = 'just now.';
    } else if (delta < minute) {
      result = delta + ' seconds ago.';
    } else if (delta < 2 * minute) {
      result = 'a minute ago.';
    } else if (delta < hour) {
      result = Math.floor(delta / minute) + ' minutes ago.';
    } else if (Math.floor(delta / hour) === 1) {
      result = '1 hour ago.';
    } else if (delta < day) {
      result = Math.floor(delta / hour) + ' hours ago.';
    } else {
      result = this._formatDateToRead(date);
    }
    return result;
  }
  

  componentWillMount() {
    this.setState({
      loadingCommits: true
    });
  }

  componentDidMount() {
    new Promise((resolve, reject) => {
      axios.get('https://api.github.com/repos/ALazenka/tuxeditors-site/commits').then((response) => {
        let counter = 0;
        const commitList = [];
        response.data.forEach(commit => {
          if (counter < 5) {
            commitList.push(commit);
            counter++;
          }
        })
        this.setState({
          commitList
        });
        resolve(response);
      }).catch((error) => {
        if (error.response.status === 403 && error.response.data.documentation_url === 'https://developer.github.com/v3/#rate-limiting') {
          this.setState({
            rateLimitError: true,
            showWarning: true
          });
          this._checkResetTime();
        };
        reject(error);
      });
    });
  }

  _toggleAlert() {
    this.setState({
      showWarning: !this.state.showWarning
    });
  }

  _checkResetTime() {
    new Promise((resolve, reject) => {
      axios.get('https://api.github.com/rate_limit').then((response) => {
        this.setState({
          errorInfo: response.data
        });
        resolve(response);
      });
    });
  }

  _renderCommitList() {
    if (!this.state.showWarning) {
      return this.state.commitList.map((commit, i) => {
        return (
          <li className='commit' key={i}>
            <Well className='commitContents'>
              <h4>{ commit.commit.message }</h4>
              <div>Author: { commit.commit.author.login }</div>
              <div>Published: { this._friendlyDate(commit.commit.author.date)}</div>
              <a href={commit.html_url}>View Changed Files</a>
            </Well>
          </li>
        )
      })
    } else {
      return (
        <div>Currently Not Available</div>
      );
    }
  }

  _renderWarning() {
    const { rateLimitError, showWarning, errorInfo } = this.state;
    const resetTime = errorInfo.resources ? new Date(errorInfo.resources.core.reset * 1000).toString() : null;
    if (rateLimitError && showWarning) {
      return (
        <Alert bsStyle="danger">
          <h4>GitHub API rate limit exceeded!</h4>
          <p>Our site has been contacting GitHub a lot.</p>
          <p>Reset time: { resetTime }</p>
          <p>
            <Button onClick={() => this._toggleAlert()}>Hide</Button>
          </p>
        </Alert>
      );
    }
  }

  render() {
    return (
      <div className="commitList">
        { this._renderWarning() }
        <h3>Most Recent Commits</h3>
        <div>
          { this._renderCommitList() }
        </div>
      </div>
    );
  }
}

export default CommitList;
