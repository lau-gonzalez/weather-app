import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers'
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount(){
        const { setWeather, setSelectedCity, cities, city } = this.props;
        setWeather(cities)
        setSelectedCity(city)
    }

    handleSelectedLocation = city =>{ 
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <div>
                <LocationList cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}
                 />
            </div>
        )
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
}


const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect( mapStateToProps , mapDispatchToProps)(LocationListContainer)
