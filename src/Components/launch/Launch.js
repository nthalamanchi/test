import React, { Component } from 'react'
import'./Launch.css'

export default class Launch extends Component {
  render() {
    return (
    <div className='Launch'>
        <img src={this.props.image} alt="launch" />
        <div className='content'>
         <div className='info'>
            <h1>{this.props.title}</h1>
            <h1>{this.props.date}</h1>
         </div>
            <p>{this.props.description}</p>
        </div>
    </div>
    )
  }
}
