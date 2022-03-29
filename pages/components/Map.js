import React from 'react'
import tw from "tailwind-styled-components" 
import mapboxgl from '!mapbox-gl'
import {useEffect} from 'react' 

mapboxgl.accessToken = 
'pk.eyJ1Ijoic2lkZGhhcnRodm5zIiwiYSI6ImNsMTNkcGYwMTBjMTYzZXF1NjNrYWJsM2IifQ.k-eo4uqG4JAXN6IKkaThfw';

const Map = (props) => {
    useEffect(() => {
        
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [83.026985, 25.138663 ],
          zoom: 6,
        })
        
        if(props.pickUpCoordinates){
          addToMap(map, props.pickUpCoordinates);
      }

        if(props.dropoffCoordinates){
            addToMap(map, props.dropoffCoordinates);
        }

        if(props.pickUpCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.pickUpCoordinates,
                props.dropoffCoordinates
            ], {
                padding: 60
            })
        }
          

      },[props.pickUpCoordinates, props.dropoffCoordinates])
      
      
      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
      }
      

  return (
    <Wrapper id = 'map'>Map</Wrapper>
  )
}

const Wrapper = tw.div`
flex-1 h-1/2
`

export default Map