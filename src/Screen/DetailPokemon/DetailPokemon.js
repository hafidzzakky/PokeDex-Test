import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom"

class DetailPokemon extends Component {
  componentDidMount(){
      console.log(this.props)
  }

  render() {
    return (
      <div>
      https://github.com/v4iv/pokedex
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailPokemon))
