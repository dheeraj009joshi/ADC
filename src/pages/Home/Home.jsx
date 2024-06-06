import React from 'react'
import HeroBanner from '../HeroBanner/HeroBanner'
import ExperienceSection from '../ExperienceSection/ExperienceSection'
import ContactForm from '../../components/ContactForm/ContactForm'
const Home = () => {
  return (
    <>
        <HeroBanner/>
        <ExperienceSection />
        <ContactForm/>
    </>
  )
}

export default Home