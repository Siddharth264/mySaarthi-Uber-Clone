import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const About = () => {
  return (
    <Wrapper>
        <Desc>
            <ButtonContainer>
                <Link href="/" >
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
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
                
                <Link href="https://github.com/Siddharth264?tab=repositories">
                <Github src="https://img.icons8.com/color-glass/48/000000/github.png"/> 
                </Link>
                <Link href="https://www.facebook.com/thakur.siddharth.77/">
                <Facebook src="https://img.icons8.com/color-glass/48/000000/facebook.png" />
                </Link>
                <Link href="https://www.instagram.com/siddh._.artha/">
                <Instagram src="https://img.icons8.com/cute-clipart/48/000000/instagram-new.png" />
                </Link>

            </Contacts>
        </AboutSection>
    </Wrapper>
  )
}


const Wrapper = tw.div`
h-screen flex flex-col  bg-gray-200
`
const Github = tw.img`
transform hover:scale-105
`
const Contacts = tw.div`
flex  items-center
`

const Facebook = tw.img`
transform hover:scale-105

`

const Instagram = tw.img`
transform hover:scale-105


`
const ReactImg = tw.img`
transform hover:scale-105  h-28 w-28 px-2 py-2
`

const Part1 = tw.div`
flex flex-col justify-center  items-center my-12
`

const NextImg = tw.img`
h-20 px-5 py-5 transform hover:scale-105 my-4 h-28 w-52
`

const Desc = tw.div`
text-3xl font-extrabold flex flex-row justify-center pl-4 mt-8
`
const FirebaseImg = tw.img`
transform hover:scale-105 h-20 w-auto object-contain my-4
`


const TailwindCSSImg = tw.img`
h-20 transform hover:scale-105 

`
const Text = tw.div`
mt-6 mr-2 ml-10 font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
`

const ServicesImg = tw.img`
h-16 mt-3
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const AboutSection = tw.div`
flex flex-col items-center text-lg  font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
`

const BackButton = tw.img``

export default About