import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CitizenshipMapAll from './Graphs/CitizenshipMapAll';
import CitizenshipMapSingleOffice from './Graphs/CitizenshipMapSingleOffice';
import TimeSeriesAll from './Graphs/TimeSeriesAll';
import OfficeHeatMap from './Graphs/OfficeHeatMap';
import TimeSeriesSingleOffice from './Graphs/TimeSeriesSingleOffice';
import YearLimitsSelect from './YearLimitsSelect';
import ViewSelect from './ViewSelect';
import axios from 'axios';
import { resetVisualizationQuery } from '../../../state/actionCreators';
import test_data from '../../../data/test_data.json';
import { colors } from '../../../styles/data_vis_colors';
import ScrollToTopOnMount from '../../../utils/scrollToTopOnMount';


const { background_color } = colors;  

function GraphWrapper(props) {
  const { set_view, dispatch } = props;  
  let { office, view } = useParams();
  if (!view) {
    set_view('time-series');
    view = 'time-series';
  }
  
  let map_to_render;  

  if (!office) {
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesAll />;
        break;
      case 'office-heat-map':
        map_to_render = <OfficeHeatMap />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapAll />;
        break;
      default:
        break;
    }
  } else {
    switch (view) {
      case 'time-series':
        map_to_render = <TimeSeriesSingleOffice office={office} />;
        break;
      case 'citizenship':
        map_to_render = <CitizenshipMapSingleOffice office={office} />;
        break;
      default:
        break;
    }
  }

  // Define an asynchronous function to update application state with new data from API
  async function updateStateWithNewData(years, view, office, stateSettingCallback) {

  const baseURLFiscal = 'https://hrf-asylum-be-b.herokuapp.com/cases/fiscalSummary';
  const baseURLCitizenship = 'https://hrf-asylum-be-b.herokuapp.com/cases/citizenshipSummary';  

   if(office === 'all' || !office) {
         // Fetch fiscal summary data for the given range of years
         const fiscalData = await axios.get(`${baseURLFiscal}`, {
          params: {
            from: years[0],
            to: years[1],
          },
         });

         // Fetch citizenship summary data for the same range
         const citizenshipData = await axios.get(`${baseURLCitizenship}`, {
          params: {
            from: years[0],
            to: years[1],
          },
         });
        
        // Combine the citizenship results into the fiscal data
        fiscalData.data['citizenshipResults'] = citizenshipData.data;

        // Prepare the combined data for state update
        const combinedData = [fiscalData.data];

        // Call the callback function to update the state with the new date
        stateSettingCallback(view, office, combinedData);
    
      } else {
      const fiscalData = await axios.get(`${baseURLFiscal}`, {
        params: {
          from: years[0],
          to: years[1],
          office: office,
        },
      });

      const citizenshipData = await axios.get(`${baseURLCitizenship}`, {
        params: {
          from: years[0],
          to: years[1],
          office: office,
        },
      });

      fiscalData.data['citizenshipResults'] = citizenshipData.data;

      const combinedData = [fiscalData.data];

      stateSettingCallback(view, office, combinedData);  
    }
 }

  
  const clearQuery = (view, office) => {
    dispatch(resetVisualizationQuery(view, office));   
  };
  
  return (
    <div
      className="map-wrapper-container" 
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '50px',
        backgroundColor: background_color,
      }}
    >
      <ScrollToTopOnMount />
      {map_to_render}
      <div
        className="user-input-sidebar-container"
        style={{
          width: '300px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ViewSelect set_view={set_view} />
        <YearLimitsSelect
          view={view}
          office={office}
          clearQuery={clearQuery}
          updateStateWithNewData={updateStateWithNewData}    
        />
      </div>
    </div>
  );
}

export default connect()(GraphWrapper);