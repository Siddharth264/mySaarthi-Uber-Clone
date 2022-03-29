import React from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const RideSelector = ({pickUpCoordinates, dropoffCoordinates, pickup, dropoff}) => {
    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` + 
            new URLSearchParams({
                access_token: "pk.eyJ1Ijoic2lkZGhhcnRodm5zIiwiYSI6ImNsMTNkcGYwMTBjMTYzZXF1NjNrYWJsM2IifQ.k-eo4uqG4JAXN6IKkaThfw",
            })
        ).then((response)=>{
            return response.json();
        }).then(data => {
            // console.log
            if(data.routes[0]) {
            setRideDuration(data.routes[0].duration/100)
            }
        }).catch((e) => console.log(e));

    }, [pickUpCoordinates, dropoffCoordinates])
  return (
    <Wrapper>
        <Title>
            Choose a ride or swipe up for more
        </Title>

        <CarList>
            { carList.map((car, index) => (
                <Car key={index}>
                <CarImage src={car.imgUrl} />

                <CarDetails>
                    <Service>{car.service}</Service>
                    <Time>5 mins away</Time>
                </CarDetails>

                <Link href={
                    {
                        pathname : "/confirmride",
                        query : {
                            pickup : pickup,
                            dropoff : dropoff,
                            carImg : car.imgUrl,
                            car : car.service,
                            price : (rideDuration * car.multiplier).toFixed(2),
                            
                        }
                    }
                }>

                <Price>
                    {'$'+(rideDuration * car.multiplier).toFixed(2)}
                </Price>
                </Link>

            </Car>
            
            ))}
        </CarList>
    
    </Wrapper>
  )
}

const Wrapper = tw.div`
 overflow-y-scroll flex flex-col
`

const Title = tw.div`
text-gray-500 text-center text-s py-2 border-b
`

const CarImage = tw.img`
h-14 mr-4
`

const CarList = tw.div`
overflow-y-scroll
`

const Car = tw.div`
flex  p-4 items-center
`

const CarDetails = tw.div`
flex-1
`

const Service = tw.div`
font-medium font-bold
`

const Time = tw.div`
text-s text-blue-500
`

const Price = tw.div`
text-small mr-3 font-semibold cursor-pointer border-4 border-transparent p-2 text-white bg-blue-400
`


export default RideSelector