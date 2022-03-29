import React from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from "next/router"
import Link from 'next/link'

const Confirmride = () => {

    const router = useRouter()
    const { pickup, dropoff , carImg, car,  price} = router.query


  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/" >
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
        </ButtonContainer>
        <ConfirmMessage1>
            Booking Successful
        </ConfirmMessage1>
        <Tick src = "https://www.pngitem.com/pimgs/m/240-2408141_blue-tick-in-circle-hd-png-download.png" />
        <ConfirmMessage2>
            You have booked a ride...
        </ConfirmMessage2>
        <ConfirmMessage3>
            {pickup} To {dropoff}
        </ConfirmMessage3>
        <VehicleImage src= {carImg} />
        <Vehiclename>
            {car}
        </Vehiclename>
        <Fare>
            {'$'+ price}
        </Fare>
    </Wrapper>
  )
}

const Wrapper = tw.div`
bg-black text-center h-screen p-40 flex flex-col 
`

const ConfirmMessage1 = tw.div`
text-6xl mb-8 text-white 	
`

const ConfirmMessage2 = tw.div`
text-3xl pl-3 text-white
`

const ConfirmMessage3 = tw.div`
font-bold text-2xl py-4 text-white	
`
const VehicleImage = tw.img`
h-1/5 w-auto object-contain
`

const Vehiclename = tw.div`
font-medium text-2xl text-white
`
const Fare = tw.div`
font-light text-xl p-4 text-white
`
const Tick = tw.img`
h-20 w-auto object-contain
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`

`




export default Confirmride