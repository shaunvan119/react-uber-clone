import { useEffect } from 'react';
import tw from "tailwind-styled-components";
import mapboxgl from '!mapbox-gl';


mapboxgl.accessToken = 
'pk.eyJ1Ijoic2hhdW52YW4xOTkiLCJhIjoiY2t6MXp0NDNnMXJmMTJubXdrdXhsZGlpdCJ9.uFoPZjNNgH8xWvJb1Hy_sw';

const Map = (props) => {
    

    useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

    if(props.pickupCoordinates){
        addToMap(map, props.pickupCoordinates)
     }
    }, [props.pickupCoordinates, props.dropoffCoordinates])

    const addToMap = (map, coordinates) =>{
    const marker1 = new mapboxgl.Marker()
         .setLngLat(coordinates)
         .addTo(map);
       }

 
  

  return <Wrapper id='map'></Wrapper>
}

export default Map;

const Wrapper = tw.div`
flex-1

`


