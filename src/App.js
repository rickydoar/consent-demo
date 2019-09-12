import React, { Component } from 'react';
import {ConsentManager, openConsentManager} from '@segment/consent-manager'
import inEU from '@segment/in-eu'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const bannerContent = (
      <span>
        We use cookies (and other similar technologies) to collect data to improve
        your experience on our site. By using our website, you’re agreeing to the
        collection of data as described in our{' '}
        <a href="/docs/legal/website-data-collection-policy/" target="_blank">
          Website Data Collection Policy
        </a>.
      </span>
    )
    const bannerSubContent = 'You can change your preferences at any time.'
    const preferencesDialogTitle = 'Website Data Collection Preferences'
    const preferencesDialogContent = 'We use data collected by cookies and JavaScript libraries to improve your browsing experience, analyze site traffic, deliver personalized advertisements, and increase the overall performance of our site.'
    const cancelDialogTitle = 'Are you sure you want to cancel?'
    const cancelDialogContent = 'Your preferences have not been saved. By continuing to use our website, you՚re agreeing to our Website Data Collection Policy.'
    return (
      <div className="App">
        <ConsentManager
          writeKey="P00ffDKxmMcoBJMMfJNLw0yvQ3Ne3WRx"
          shouldRequireConsent={inEU}
          bannerContent={bannerContent}
          bannerSubContent={bannerSubContent}
          preferencesDialogTitle={preferencesDialogTitle}
          preferencesDialogContent={preferencesDialogContent}
          cancelDialogTitle={cancelDialogTitle}
          cancelDialogContent={cancelDialogContent}
        />
        <div className="App-header">
          <div className="App-title">
            Consent Demo
          </div>
        </div>
        <div className="App-body">
          <div className="test-container">
            <div className="buttons-container">
              <div className="segment-button segment-green">
                Send Track Event
              </div>
              <div className="segment-button segment-green">
                Send Identify Call
              </div>
            </div>
            <div className="buttons-container">
              <div className="segment-button segment-white" onClick={openConsentManager}>
                Open Consent Preferences
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
