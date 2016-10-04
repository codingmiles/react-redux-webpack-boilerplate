import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import actions from '../actions/HomeActionCreators'

class Home extends Component {
  renameButton () {
    this.props.dispatch(actions.renameButton("New Button"))
  }

  fetchWeatherInfo () {
    this.props.dispatch(actions.fetchWeatherInfo({city: 'mumbai'}))  
  }

  _renderLocationName () {
    return this.props.weatherInfo ? (
      <span>{`Name => ${this.props.weatherInfo['name']}`}</span>
    ) : null
  }

  render () {
    return (
      <div>
        <button onClick={() => this.renameButton()}>{this.props.name}</button>
        <br/><br/>
        <button onClick={() => this.fetchWeatherInfo()}>Fetch Weather Info</button>
        <br/><br/>
        {this._renderLocationName()}
        <a href="#/about">About Us</a>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  weatherInfo: PropTypes.object,
}

const mapStateToProps = (state) =>
  Object.assign({}, state.home)
export default connect(mapStateToProps)(Home)
