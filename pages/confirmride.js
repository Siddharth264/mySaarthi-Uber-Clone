import React from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from "next/router"
import Link from 'next/link'
import mypic from '../assets/myimage.png'
import Image from 'next/image'
import {useEffect, useState} from 'react' 
import { collection, doc, setDoc } from "firebase/firestore"; 
import {db} from '../firebase'




const Confirmride = () => {

    const router = useRouter()
    const { pickup, dropoff , carImg, car,  price} = router.query

    function SavePlace() {
        const newPlace = doc(collection(db, "places"))

        setDoc(newPlace, {
            pickup : pickup,
            dropoff : dropoff
        })
    }

    useEffect(() => {
        SavePlace()
    }, [])
    


  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/" >
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
        </ButtonContainer>
        <Logo>
        <Image
              src={mypic}
              alt="Picture of the author"
              width="100px"
              height = "100px"
            />

        </Logo>
        <ConfirmMessage1>
            Booking Successful
        </ConfirmMessage1>
        <Tick src = "https://www.pngitem.com/pimgs/m/240-2408141_blue-tick-in-circle-hd-png-download.png" />
        <ConfirmMessage2>
            You have booked a ride with ChaloIndia
        </ConfirmMessage2>
        <ConfirmMessage3>
            {pickup} To {dropoff}
        </ConfirmMessage3>
        <VehicleImage src= {carImg} />
        <Vehiclename>
            {car}
        </Vehiclename>
        <Fare>
            {'₹'+ price}
        </Fare>
        
    </Wrapper>
  )
}

const Wrapper = tw.div`
bg-black items-center h-screen w-screen p-4 flex flex-col justify-evenly
`

const ConfirmMessage1 = tw.div`
text-5xl mb-8 text-white text-center
`

const ConfirmMessage2 = tw.div`
text-2xl pl-3 text-white text-center
`

const ConfirmMessage3 = tw.div`
font-bold text-xl py-4 text-white text-center
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
h-20 w-auto object-contain mb-5
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`

`
const Logo = tw.div`
 flex justify-center items-center
`



export default Confirmride