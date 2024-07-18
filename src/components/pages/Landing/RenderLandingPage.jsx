import React from 'react';

// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';

// CSS
import '../../../styles/RenderLandingPage.less';

// Components
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

// For the purposes of testing PageNav
 //import PageNav from '../../common/PageNav';

 function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory(); 

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>  
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>
      

      
      <div className="graphs-section"> 
        <div className="grant-rates-by-office-container">
        <img
         src = {GrantRatesByOfficeImg}
         alt = "Bar graph representing grant rates by office"
         />
        <p className = "graph-image-description">
           Search Grant Rates By Office
        </p>
        </div>
        
        <div className = "grant-rates-by-nationality-container">
        <img
        src = {GrantRatesByNationalityImg}
        alt = "Pie chart representing grant rates by nationality"
        />
        <p className = "graph-image-description">
           Search Grant Rates by Nationality
        </p>
        </div>

        <div className = "grant-rates-over-time-container">
        <img 
        src = {GrantRatesOverTimeImg}
        alt = "Line graph representing grant rates over time"
        />
        <p className = "graph-image-description">
          Search Grant Rates Over Time
         </p>
         </div>
        </div>
        
        <div  className = "view-more-data-btn-container" >
        <Button
          type = "default"
          style = {{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick = {() => history.push('/graphs')}
          className = "page-button"
        >
          View the Data
        </Button>

        <Button
          type = "default"
          style = {{backgroundColor: '#404C4A', color: '#FFFFFF'}}
          onClick = {() =>
            (window.location.href = 'https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv')
          }
          className = "download-data-btn page-button"
        >
          Download the Data
        </Button>
      </div>

      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      
      <div>
        <div className="bottom-section">
        <h1>Systemic Disparity Insights</h1>
        <div className = "data-container">
          <div className = "first-data-point-container data-point-container">
          <p className = "data-point">36%</p>
          <h4 className = "data-description">
            By the end of the Trump administration, the average<br />asylum office grant had fallen 36 percent from an<br />average of 44 percent in fiscal year 2016
            to 28 percent<br />in fiscal year 2020.
          </h4>
          </div>

          <div className = "second-data-point-container data-point-container">
          <p className = "data-point">5%</p>
          <h4 className = "data-description">
             The New York asylum office grant rate dropped to 5<br />percent in fiscal year 2020. 
          </h4>
          </div>

          <div className = "third-data-point-container data-point-container">
          <p className = "data-point">6x Lower</p>
          <h4 className = "data-description">
        Between fiscal year 2017 and 2020, the New York
        <br />
        asylum office's average grant rate was six times lower than the San Francisco asylum office.
          </h4>
          </div>
         </div>
      </div>
      
      <div className = "read-more-data-btn-container">
      <Button 
        className = "readMoreButton page-button"
        type = "default"
        style = {{backgroundColor: '#404C4A', color: '#FFFFFF'}}
        onClick = {() => 
         (window.location.href = 'https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/')
        }
      >
        Read More
      </Button>
      
        
      <p onClick = {() => scrollToTop()} className = "back-to-top page-button">
         Back To Top ^
      </p>
      </div>
     </div>
    </div>
  );
}
export default RenderLandingPage;