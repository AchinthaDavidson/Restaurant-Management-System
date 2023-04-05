import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Niv from '../../components/Niv';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./map.css"

const center2 = {lat:6.949,lng:80.789};

export default function DriverMap() {

    const center = { lat: 48.8584, lng:2.2945}

    const {isLoaded} = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyBv1H_VqIZse7f0hBdvLJThzpB-SaFfkPg'
    });
  
    if(!isLoaded) return <div><h1>Loading</h1></div>;

        return(
            <div>
            <Niv name='Driver'/>
            <ToastContainer position="top-right" theme="colored" /> 
            <div className="data">
               
               

                <table style={{ width:"100%", margin:"auto auto" }}>
                    <tbody>
        
                        <tr>
                            <td rowSpan={4} style={{ width:"100%", margin:"auto auto" , minWidth:"50vh" }} >
                                <div className="positionDiv">
                                    <Map />
                                </div>
                            </td>
                            <td><input type="text" name="" id="" placeholder=" Start Location"  style={{height:"3rem"}}/></td>
                            <td><input type="text" name="" id="" placeholder=" Destination"  style={{height:"3rem"}}/></td>
                        
                        </tr>
                      
        
                        <tr>
                        <td><p>Distance :</p></td>
                            <td><p>Duration :</p></td>
                            
                        </tr>
                        <tr>
                            <td colSpan={2}>
                            <button 
                                className="middlebtns2" >   
                                Calculate Route
                            </button>  
                            </td>

                        </tr>
                        <tr>
                            <td colSpan={2}>
                            <button 
                                className="middlebtns2" >   
                                Clear
                            </button>  
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


         

  function Map(){
    const center = useMemo(() => ({lat:6.949,lng:80.789}), []);
   
    return (
    <GoogleMap 
        zoom={15} 
        center={center} 
        mapContainerClassName="mapContainer" 
        id="map"
        mapContainerStyle={{margin:"äuto auto"}}
        options={{
         
            streetViewControl:false,
            mapTypeControl:false,
            fullscreenControl:false
        }}
      >    
      <Marker position={center2} />
      <Marker position={{lat:6.949,lng:80.789}} />

    </GoogleMap>)
}

  
