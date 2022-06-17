import HeadPage from './../components/head'
import TopAlert from '../components/top-alert'
import Navbar from '../components/navbar'
import HeroSection from '../components/index-hero'
import Service2Section from '../components/index-service'
import PVSection from '../components/index-pv-banner'
import StepbyStep from '../components/index-stepper'
import Revision from '../components/index-lead-gen.js'
import BoxSuscripcion from '../components/index-carvuk-pro'
import NewsSection from '../components/index-pr-banner'
import ChatwootWidget from '../components/utils-chatwoot'
import FooterSection from '../components/footer'
import { useState, useEffect } from 'react'


const IndexPage = () => {
  const [showInstallMessage, setshowInstallMessage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Detects if device is on iOS 
      const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
      }
      // Detects if device is in standalone mode
      const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
  
      // Checks if should display install popup notification:
      if (isIos() && !isInStandaloneMode() && !showInstallMessage) {
        setshowInstallMessage(true);
      }
    }
  }, [showInstallMessage]);
  
  console.log(showInstallMessage)

  return(
    <div>
      {showInstallMessage? (
        <p>hola vicente!</p>
      ) : (
        <p></p>
      ) }
      <HeadPage icon='' 
                 href='https://carvuk.com' 
                 title='Carvuk: Servicio para vehículos a domicilio' 
                 description='Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode.' 
                 image='https://carvuk.com/image-preview.png' />

      <TopAlert/>
      <Navbar ctaBool={true} />
      <HeroSection/>
      <Service2Section/>
      <PVSection/>
      <StepbyStep/>
      <Revision/>
      <BoxSuscripcion/>
      <NewsSection/>
      <ChatwootWidget/>
      <FooterSection/>
    </div>
    )
  }

  export default IndexPage
