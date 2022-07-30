import React, { Component } from 'react'
import Launch from '../launch/Launch'
import './style.css'
export default class Launchlist extends Component {
  render() {
    return (
      <div className='launch-list'>
    <Launch 
      title='title' 
      date='678767' 
      description='loremwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww' 
      image='https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg'/>

     <Launch 
      title='title' 
      date='678767' 
      description='loremwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww' 
      image='https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg'/>
      </div>
    )
  }
}
