import React, { useEffect, useState } from 'react'
import { collection , getDocs } from 'firebase/firestore'
import tw from "tailwind-styled-components"
import {db} from '../firebase'
import Places from './components/Places'
import Link from 'next/link'


const Savedpages = () => {
    const [places, setPlaces] = useState([]);
    
    
    
    useEffect(() => {
        const colref = collection(db,"places")
        
        getDocs(colref).then((snapshot) => {
            setPlaces(snapshot.docs.map(doc => ({ id:doc.id , place :doc.data()})));
        })


    }, []);
    
    //console.log(places)

  return (
    <Wrapper>
        <ButtonContainer>
        <Link href="/search">
            <BackButtonImage src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
        </ButtonContainer>
        <RecentText>
        Recently Visited
        </RecentText>
        
    <Saves>   
     {
         places.map(({id, place}) => (
             <Places key = {id} pickup= {place.pickup} dropoff = {place.dropoff} />
         ))
     }  
     </Saves>
    </Wrapper>

  )
}
const ButtonContainer = tw.div`
bg-gray-200 px-4 cursor-pointer
`

const BackButtonImage = tw.img`

`
const Saves = tw.div``

const RecentText = tw.div`
flex justify-center text-3xl font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
mt-10 font-black
`

const Wrapper  = tw.div`

`

export default Savedpages