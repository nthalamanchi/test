import React, { Component } from 'react'
import Launch from '../launch/Launch'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Launchlist extends Component {
    state={
        launches:[]
    }
    componentDidMount=()=>{
        this.getLaunches()
    }
    getLaunches = () =>{
        axios.get('https://api.spacexdata.com/v3/launches').then((response)=>{
           this.setState({
            launches:response.data
           })
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    launchList = ()=>{
        const llc = this.state.launches.map((launch,index)=>{
            const imag = launch.links.flickr_images.length===0 ? 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Soyuz_TMA-9_launch.jpg/597px-Soyuz_TMA-9_launch.jpg' : launch.links.flickr_images[0]
            return <Link to={"/launch/"+launch.flight_number} key={"launch_" + index}>
            <Launch 
            title={launch.mission_name}
            date={launch.launch_date_local}
            description={launch.details}
            image={imag}/>
            </Link>
            
        })
        return llc;
    }
  render() {

    return (
      <div className='launch-list'>
    {this.launchList()}
      </div>
    )
  }
}
