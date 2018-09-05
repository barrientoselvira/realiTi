import React, { Component } from 'react';
// import { Entity, Scene } from 'aframe-react';
import './aframe-cursor-listener-component';
import './App.css';


class App extends Component {
  render() {
    return (
      <a-scene>
        <a-assets>
          <a-mixin id="cube" geometry="primitive: box"></a-mixin>
          <audio
            id="delta"
            className="audio"
            src="/audio/delta_super_recovery_233Hz.mp3"
            crossOrigin="anonymous"
          ></audio> 
          <audio
            id="theta"
            className="audio"
            src="/audio/theta_233Hz.mp3"
            crossOrigin="anonymous"
          ></audio> 
           <audio
            id="gamma"
            className="audio"
            src="/audio/gamma_genius_60Hz.mp3"
            crossOrigin="anonymous"
          ></audio>  
           <audio
            id="alpha"
            className="audio"
            src="/audio/alpha_391Hz.mp3"
            crossOrigin="anonymous"
          ></audio> 
           <audio
            id="beta"
            className="audio"
            src="/audio/detox_471Hz.mp3"
            crossOrigin="anonymous"
          ></audio>    
        </a-assets>

        
        
        <a-entity position="0 1 5">
          <a-entity camera look-controls wasd-controls>
            <a-entity position="0 0 -3"
                      geometry="primitive: ring; radiusInner: 0.05; radiusOuter: 0.1;"
                      material="color: cyan; shader: flat"
                      cursor="fuse: true">
              <a-animation begin="click" easing="ease-in" attribute="scale"
                  fill="forwards" from="0.05 0.05 0.05" to="1 1 1" dur="150"></a-animation>
              <a-animation begin="fusing" easing="ease-in" attribute="scale"
                  fill="backwards" from="1 1 1" to="0.05 0.05 0.05" dur="1500"></a-animation>
            </a-entity>
          </a-entity>
        </a-entity>

        <a-sky color="#DBE2FF"></a-sky>
        
      
        <a-text value="realiiTii" position="-1 4 0" color="#EC09AF" wrap-count="20"></a-text>
        <a-text id="help-text" position="-1 3 0"  color="#0FB1DC" value="Look at a sphere to choose or pause your meditative state audio!"></a-text>
        
        <a-text id="audio-text" position="-1 1 0" value="Delta"></a-text>

        <a-entity 
          id="sphere-delta"
          cursor-listener="text: #audio-text; audio: #delta; name: Delta; autoplay: false"
          class="main-white"
          geometry="primitive: sphere; color:#92ACFD"
          material="color: #92ACFD; shader: flat"
          position="-20 0.2 -10"
          light="type: point; intensity: 5"
        ></a-entity>

        <a-entity 
          id="sphere-theta"
          cursor-listener="text: #audio-text; audio: #theta; name: Theta; autoplay: false"
          class="main-white"
          geometry="primitive: sphere; color:#92ACFD"
          material="color: #98A4BE; shader: flat"
          position="8 0.15 10"
          light="type: point; intensity: 5"
        ></a-entity>

        <a-entity 
          id="sphere-alpha"
          cursor-listener="text: #audio-text; audio: #alpha; name: alpha; autoplay: false"
          class="main-white"
          geometry="primitive: sphere; color:#92ACFD"
          material="color: #98A4BE; shader: flat"
          position="7 0.30 20"
          light="type: point; intensity: 5"
        ></a-entity>

         <a-entity 
          id="sphere-gamma"
          cursor-listener="text: #audio-text; audio: #gamma; name: gamma; autoplay: false"
          class="main-white"
          geometry="primitive: sphere; color:#92ACFD"
          material="color: #98A4BE; shader: flat"
          position="4 0.30 -20"
          light="type: point; intensity: 5"
        ></a-entity>

        <a-entity 
          id="sphere-beta"
          cursor-listener="text: #audio-text; audio: #beta; name: beta; autoplay: false"
          class="main-white"
          geometry="primitive: sphere; color:#92ACFD"
          material="color: #98A4BE; shader: flat"
          position="12 0.30 -15"
          light="type: point; intensity: 5"
        ></a-entity>

        <a-entity particle-system="preset: snow; particleCount: 3000; size:1.0"></a-entity>
        
        <a-entity 
          id="ocean" 
          ocean="density: 20; width: 50; depth: 50; speed: 2"
          material="color: #73B9FF; opacity: 0.75; metalness: 0; roughness: 1"
          rotation="-90 0 0"
        ></a-entity>
        <a-entity id="light" light="type: ambient; color: #888"></a-entity>
      </a-scene>
    );
  }
}



export default App;
