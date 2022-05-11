import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'


const Places = ({ pickup, dropoff}) => {
  return (

    <Wrapper>
      <Link href={
            {
                pathname : "/confirm",
                query : {
                    pickup : pickup,
                    dropoff : dropoff,
                }
            }
        }>
    <SavedPlace>
        <PickupAdd>
            <Fromtext>From</Fromtext>
            <Add>{pickup}</Add>
        </PickupAdd>

        <DropoffAdd>
            <ToText>To</ToText>
            <Dadd>{dropoff}</Dadd>
        </DropoffAdd>
        
    </SavedPlace>
    </Link>
    </Wrapper>
  )
}

const Wrapper = tw.div`

`

const SavedPlace = tw.div` 
flex flex-row justify-between border-4 p-4 rounded-lg m-5
`
const Add = tw.div`
font-bold text-2xl
`

const Dadd = tw.div`
font-bold text-2xl
`

const ToText = tw.div`
text-xs
`

const PickupAdd = tw.div`
flex flex-col 
`
const Fromtext = tw.div`
text-xs
`
const DropoffAdd = tw.div``

export default Places