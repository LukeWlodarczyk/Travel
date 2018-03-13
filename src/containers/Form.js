import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGeocode } from "../actions/index.js";
import PlacesAutocomplete from 'react-places-autocomplete';

const mapStateToProps = state => {
  return {
      info: state.info
   };
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: '',
      destination: '',
    }
  }

  handleChangeUserLoc = (userLocation) => {
    this.setState({ userLocation })
  }

  handleSelectUserLoc = (userLocation) => {
    this.setState({ userLocation })
  }

  handleEnterUserLoc = (userLocation) => {
    this.setState({ userLocation })
  }

  handleChangeDest = (destination) => {
    this.setState({ destination })
  }

  handleSelectDest = (destination) => {
    this.setState({ destination })
  }

  handleEnterDest = (destination) => {
    this.setState({ destination })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const locations = this.state;
    this.props.getGeocode(locations)
    this.setState({
      destination: '',
      userLocation: '',
    });
  }

  renderSuggestion = ({ formattedSuggestion }) => (
    <div>
      <strong>{ formattedSuggestion.mainText }</strong>{' '}
      <small>{ formattedSuggestion.secondaryText }</small>
    </div>
  )

  onError = (status, clearSuggestions) => {
    console.log('Google Maps API returned error with status: ', status)
    clearSuggestions()
  }

  onFocus = () => {
    console.log('focus');
  }

  shouldFetchSuggestions = ({ value }) => value.length > 0

  render() {

    const destinationProps = {
      value: this.state.destination,
      onChange: this.handleChangeDest,
      type: 'search',
      placeholder: 'Type in your location...',
      autoFocus: true,
    }

    const userLocationProps = {
      value: this.state.userLocation,
      onChange: this.handleChangeUserLoc,
      type: 'search',
      placeholder: 'Type in travel destination...',
    }



    // const options = {
    //   location: new google.maps.LatLng(-34, 151),
    //   radius: 2000,
    //   types: ['address']
    // }

    const options = {
      types: ['(cities)'],
      // componentRestrictions: {country: "pl"}
    }

    return (

          <form onSubmit={this.handleSubmit}>
            <PlacesAutocomplete
              inputProps={destinationProps}
              renderSuggestion={this.renderSuggestion}
              shouldFetchSuggestions={this.shouldFetchSuggestions}
              onFocus={this.onFocus}
              onSelect={this.handleSelectDest}
              onEnterKeyDown={this.handleEnterDest}
              onError={this.onError}
              options={options}
            />
            <PlacesAutocomplete
              inputProps={userLocationProps}
              renderSuggestion={this.renderSuggestion}
              shouldFetchSuggestions={this.shouldFetchSuggestions}
              onFocus={this.onFocus}
              onSelect={this.handleSelectUserLoc}
              onEnterKeyDown={this.handleEnterUserLoc}
              onError={this.onError}
              options={options}
            />
            <input type='submit' value='Search'/>
          </form>

      )
  }
}

const Form1 = connect(mapStateToProps, { getGeocode })(Form);

Form1.propTypes = {

};

export default Form1;
