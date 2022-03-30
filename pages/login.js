import { useEffect } from "react" 
import tw from "tailwind-styled-components"
import { useRouter } from "next/router"
import { signInWithPopup, onAuthStateChanged, } from "firebase/auth"
import { auth, provider } from "../firebase"

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
        <UberLogo src = "https://i.ibb.co/n6LWQM4/Post.png" />
        <Title>Log In to access your account</Title>
        <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
        <SignInButton onClick={() => signInWithPopup(auth, provider)}>
            Sign In With Google
        </SignInButton>


    </Wrapper>
  )
}


const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-5
`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 w-full cursor-pointer`

const UberLogo = tw.img`
h-10 w-auto object-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`
object-contain w-full
`


export default Login