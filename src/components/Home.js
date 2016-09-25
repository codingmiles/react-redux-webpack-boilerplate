import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import { renameButton } from '../actions/HomeActionCreators'

class Home extends Component {
  buttonPressed () {
    this.props.dispatch(renameButton("New Button"))
  }

  render () {
    return (
      <div>
        <button onClick={() => this.buttonPressed()}>{this.props.name}</button>
        <a href="#/about">About Us</a>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

const mapStateToProps = (state) =>
  Object.assign({}, state.home)
export default connect(mapStateToProps)(Home)
