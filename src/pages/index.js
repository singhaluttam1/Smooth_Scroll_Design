import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/InfoSection'
import HeroSection from '../components/HeroSection'
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen,setIsopen]=useState(false)

   const toggle=()=>{
    setIsopen(!isOpen)
   } 

  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle}/>   
     <Navbar toggle={toggle}/>
     <HeroSection/>
     <InfoSection {...homeObjOne}/>
     <InfoSection {...homeObjTwo}/>
     <Services/>
     <InfoSection {...homeObjThree}/>
     <Footer/>
    </>
  )
}

export default Home