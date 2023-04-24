import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { GoogleMap, Marker, useJsApiLoader, Autocomplete,DirectionsRenderer } from '@react-google-maps/api';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./smallMap.css"

const center2 = {lat:6.949,lng:80.789};

const SmallMap = (receviedLocationFromHome) => {

    // useEffect(() => {
    //     calculateRoute();
     
    //   }, []);


    const [map,setMap] = useState(/** @type google.maps.Map  */ (null))
    const [directionResponse, setDirectionResponse] = useState("")
    const [distance,setDistance] = useState("")
    const [duration,setDuration] = useState("")
    const receviedLocation = receviedLocationFromHome.id

    //console.log(receviedLocation)
    //console.log(receviedLocationFromHome)

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()

    const permOrigin = "Nuwara Eliya, Sri Lanka"

     /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef()

    const center = useMemo(() => ({lat:6.949632874163033,lng:80.78905943343568}), []);

    const {isLoaded} = useJsApiLoader({
      googleMapsApiKey: 'AIzaSyBv1H_VqIZse7f0hBdvLJThzpB-SaFfkPg',
      libraries:['places']
    });
  
    const goBack = () => {
        window.location.href = "/Home";
  };
    async function calculateRoute(){
       
        // if(originRef.current.value === '' || destinationRef.current.value ===''){
        //     toast.error("Please enter both pickup and deliver locations...")
        //     return
        // }
    

        // if(destinationRef.current.value ===''){
        //     toast.error("Please enter deliver locations...")
        //     return
        // }

        
        // if(receviedLocation ===''){
        //     toast.error("Please enter deliver location...")
        //     return
        // }

         //eslint-disable-next-line no-undef
        const directionService = new google.maps.DirectionsService()
        const results = await directionService.route({
            origin:  permOrigin ,
           // origin: originRef.current.value,
            destination:receviedLocation,
            //eslint-disable-next-line no-undef
            travelMode : google.maps.TravelMode.DRIVING

        })
        setDirectionResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
       
     }



    if(!isLoaded) return <div><h1>Loading</h1></div>;

        return(
            <div>
            
            <ToastContainer position="top-right" theme="colored" /> 
          
               
              <table border={1} style={{borderSpacing:"0", margin:"auto auto", backgroundColor:"antiquewhite" , border:"none"}}>
                    <tbody>
                        <tr>
                        <td colSpan={3} >
                            <div className="mainContiner" style={{margin:"auto auto"}}>
                            <GoogleMap 
                                zoom={15} 
                                center={center2} 
                                mapContainerClassName="mapContainer" 
                                id="map"
                                mapContainerStyle={{margin:"äuto auto"}}
                                onLoad={map => setMap(map)}
                                options={{
                                
                                    streetViewControl:false,
                                    mapTypeControl:false,
                                    fullscreenControl:false

                                }}>    
                                <Marker position={center2} />

                                {directionResponse && <DirectionsRenderer directions={directionResponse}/>} 
    
                            </GoogleMap>
                            </div>
                            </td>                     
                            
                        </tr>
                        <tr>
                        <td colSpan={2}>
                            {/* <Autocomplete>
                                <input type="text" 
                                    placeholder="Enter your pickup point..."  
                                    style={{height:"4rem", padding:"2rem 2rem 2rem 2rem ", width:"100%"}}
                                    ref={originRef}/>
                            </Autocomplete>    */}

                            PickUp : {permOrigin}
                        
                        
                        </td>
                        </tr>
                        <tr>
                        <td colSpan={2} style={{ textAlign:"left"}}>Diliver : {receviedLocation}</td>                     
                        </tr>
                        {/* <tr>  
                            <td style={{textAlign:"center"}}>
                            <Autocomplete>
                                <input type="text"  
                                placeholder="Enter your drop point..."  
                                ref={destinationRef}/>
                            </Autocomplete>
                            </td>
                        </tr> */}
                      
                    <tr>
                        <td style={{ textAlign:"left"}}>Distance : {distance}</td>
                    
                        <td style={{ textAlign:"left"}}>Duration : {duration}</td>                     
                    </tr>
                    <tr>
                    <td colSpan={2} style={{ textAlign:"center"}}>
                        <button  
                            className="middlebtns" 
                            onClick={calculateRoute}>   
                            Calculate Route
                        </button>  
                        </td>
                    </tr>
                                            
                    </tbody>
                </table>
           
        </div>
    )
}

export default SmallMap ;
         

//   function Map(){
//     const center = useMemo(() => ({lat:6.949,lng:80.789}), []);
   
//     return (
        

//     )
// }


