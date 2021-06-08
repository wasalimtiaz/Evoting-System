import React,{useState} from 'react';
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InfoSection from '../components/infoSection'
import Services from '../components/Services'
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/infoSection/Data';
import Footer from '../components/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

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

export default Home;
