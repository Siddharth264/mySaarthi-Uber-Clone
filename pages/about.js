import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const About = () => {
  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/" >
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
        </ButtonContainer>
         <Desc>
             <Text>Technologies Used</Text>
            <ServicesImg src= "https://img.icons8.com/color/96/000000/services--v1.png" />
        </Desc>
        <Part1> 
            <Link href="https://reactjs.org">
                <ReactImg src="https://img.icons8.com/officel/96/000000/react.png"/>
            </Link>
            <Link href="https://nextjs.org/">
                <NextImg src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png"/>
            </Link>     
            <Link href="https://firebase.google.com/?gclid=CjwKCAjwuYWSBhByEiwAKd_n_gDHe0F69W9fJE9lgS6qQywCT8yo3PKxzyb6MhoSZoGPoCNkyyCwghoCSyAQAvD_BwE&gclsrc=aw.ds">
                <FirebaseImg  src="https://img.icons8.com/color/96/000000/firebase.png"/>
            </Link>
           <Link href="https://tailwindcss.com/">
                <TailwindCSSImg src="https://laravelnews.imgix.net/images/tailwindcss-1633184775.jpg?ixlib=php-3.3.1" />
           </Link> 
            
        </Part1>
        <AboutSection>
            Designed and Developed by Siddharth Singh
            <Contacts>
                <Github src="https://img.icons8.com/color-glass/48/000000/github.png"/> 
                <Facebook src="https://img.icons8.com/color-glass/48/000000/facebook.png" />
                <Instagram src="https://img.icons8.com/cute-clipart/48/000000/instagram-new.png" />
            </Contacts>
        </AboutSection>
    </Wrapper>
  )
}


const Wrapper = tw.div`
h-screen  items-center flex justify-center bg-gray-200
`

const AboutSection = tw.div`
absolute bottom-10 flex flex-col items-center text-lg font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
`
const Github = tw.img`
transform hover:scale-105
`
const Contacts = tw.div`
flex  justify-center
`

const Facebook = tw.img`
transform hover:scale-105
`

const Instagram = tw.img`
transform hover:scale-105

`
const ReactImg = tw.img`
px-5 py-5 transform hover:scale-105 my-6
`

const Part1 = tw.div`
flex flex-col justify-evenly
`

const NextImg = tw.img`
h-20 px-5 py-5 transform hover:scale-105 my-6
`

const Desc = tw.div`
top-10 absolute text-3xl font-extrabold flex 
`
const FirebaseImg = tw.img`
transform hover:scale-105 h-20 w-auto object-contain my-6
`


const TailwindCSSImg = tw.img`
h-20 transform hover:scale-105 my-6

`
const Text = tw.div`
mt-6 mr-4 font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
`

const ServicesImg = tw.img`
h-20
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md curson-pointer
`

const BackButton = tw.img``

export default About