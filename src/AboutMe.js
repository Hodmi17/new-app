import './AboutMe.css';

function AboutMe(){
    return(
        <div className ="me">
            <u><h2>About Me:</h2></u>
            <ul>
                <li clasName= "intro">  I have two beautiful kids</li>
                <li>I like to hike</li>
                <li>I enjoy baking and decor</li>
                <li>I'm learning Korean and Arabic</li>
                <li>I love to watch Korean dramas when I have time</li>
                <li>I enjoy fixing and learnig about cars</li>
                <li>I love anything nature</li>
                

            </ul>


        </div>

    )
}
export default AboutMe;
import React, { Component } from 'react'
import Mellow from './Audio/mellow.mp3';
import {Howl, Howler} from "howler";
import './home.css'
const Audio =[
    {sound:Mellow, label:"Mellow"},
]

export class Home extends Component {
    Soundplay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play();
    }
    RenderButtonAndSound= () => {
        return Audio.map((soundObj, index) =>{
            return(
                <audio src={Mellow} controls autoPlay/>
                   
                
            )
        })
    }

    
            
    render(){
        // Howler.volume(1.0)
        return <div className= "container">
            
            
            {this.RenderButtonAndSound()}
            <h1 className="header"> Breath In And Out</h1>
        </div>
    }
                
            
        
    }


export default Home;

      
