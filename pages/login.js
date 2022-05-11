import { useEffect } from "react" 
import tw from "tailwind-styled-components"
import { useRouter } from "next/router"
import { signInWithPopup, onAuthStateChanged, } from "firebase/auth"
import { auth, provider } from "../firebase"
import mypic from '../assets/myimage.png'
import Image from 'next/image'

const Login = () => {
    const router = useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push("/")
            }
        });

    },)




  return (
    <Wrapper>
        {/* <UberLogo src = "https://i.ibb.co/n6LWQM4/Post.png" /> */}
        <Logo>
        <Image
              src={mypic}
              alt="Picture of the author"
              width="150px"
              height = "130px"
            />

        </Logo>
        
        <Title>Log In to access your account</Title>
        <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>
            Sign In With Google
        </SignInButton>


    </Wrapper>
  )
}


const Wrapper = tw.div`
flex flex-col h-screen  bg-white p-5
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 w-full cursor-pointer`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`
object-contain w-full
`

const Logo = tw.div`
 flex justify-center items-center
`


export default Login