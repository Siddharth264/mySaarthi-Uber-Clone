import Image from 'next/image'
import tw from "tailwind-styled-components"
import {useEffect, useState} from 'react' 
import Map from './components/Map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import mypic from '../assets/myimage.png'





export default function Home() {

  

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name : user.displayName,
          photoUrl : user.photoURL,
        })
      }else {
        setUser(null)
        router.push('/login')
      }
    })

  }, [])
  


  return (
    <Wrapper>
      <Map/> 
      <ActionItems>
          {/*Header*/}
          <Header>
            {/* <Uberlogo src = "https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" /> */}
            <Image
              src={mypic}
              alt="Picture of the author"
              width="150px"
              height="150px"
            />
            <Profile>
              <Name> {user && user.name} </Name>
              <UserImage
              src={user && user.photoUrl}
              />
            </Profile>
            
          </Header>
          {/* ActionButtons */}

          <ActionButtons>
            <Link href="/search">
            <ActionButton>
                <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
                  Ride
              </ActionButton>
            </Link>
            <Link href="/about">
              <ActionButton>
              <ActionButtonImage src="https://img.icons8.com/color-glass/480/000000/info.png" />
                  About
              </ActionButton>
              </Link>
              <ActionButton>
              <ActionButtonImage 
              src="https://img.icons8.com/fluency/96/000000/exit.png" 
              onClick = {() => signOut(auth)}
              />
                  Signout
              </ActionButton>
          </ActionButtons>
          {/* Input Button */}
        
      </ActionItems>
    </Wrapper> 
   
  )
}
const Wrapper = tw.div`
flex flex-col  h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`

const Uberlogo = tw.img`
h-28 w-40
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-small font-bold
`

const UserImage = tw.img`
h-14 w-14 rounded-full border border-gray-200 p-px 
`

const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`

