import { useEffect, useState } from "react" 
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from "next/router"
import RideSelector from "./components/RideSelector"
import Link from 'next/link'

const Confirm = () => {

  const router = useRouter()
  const { pickup, dropoff } = router.query



  const [ pickUpCoordinates, setPickupCoordinates ] = useState([0,0]);
  const [ dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);



  const getPickupCoordinates = (pickup) => {
    

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
      new URLSearchParams({
        access_token : 'pk.eyJ1Ijoic2lkZGhhcnRodm5zIiwiYSI6ImNsMTNkcGYwMTBjMTYzZXF1NjNrYWJsM2IifQ.k-eo4uqG4JAXN6IKkaThfw',
        limit : 1
      })
    )
    .then(response => response.json())
    .then(data => {
      setPickupCoordinates(data.features[0].center)
    })

  }

  const getDropOffCoordinates = (dropoff) => {
    

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
      new URLSearchParams({
        access_token : 'pk.eyJ1Ijoic2lkZGhhcnRodm5zIiwiYSI6ImNsMTNkcGYwMTBjMTYzZXF1NjNrYWJsM2IifQ.k-eo4uqG4JAXN6IKkaThfw',
        limit : 1
      })
    )
    .then(response => response.json())
    .then(data => {
      setDropoffCoordinates(data.features[0].center)
    })
  }


  useEffect(()=> {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  },[pickup, dropoff])






  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/search" >
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
        </ButtonContainer>
        <Map 
          pickUpCoordinates = {pickUpCoordinates}
          dropoffCoordinates = {dropoffCoordinates}
        />
        <RideContainer>
            <RideSelector
              pickUpCoordinates = {pickUpCoordinates}
              dropoffCoordinates = {dropoffCoordinates}
              pickup = {pickup}
              dropoff = {dropoff}
            />
           
        </RideContainer>
    </Wrapper>
  )
}



const Wrapper = tw.div`
flex flex-col h-screen
`
const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`



const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md curson-pointer
`

const BackButton = tw.img``




export default Confirm