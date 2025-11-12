import React from 'react'
import SLogon from '../Components/SLogon'
import MaharashtraShowcase from '../Components/SliderMaha'
import AmrutStats from '../Components/Dynamic'
import AmrutMissionVision from '../Components/Vison'
import AmrutSlider from '../Components/AmrutSlider'
import AmrutBanner from '../Components/Banner'
import AboutAmrut from '../Components/Slider'
import YojanaSection from '../Components/Tabs'
import AnimatedMapCircle from '../Components/AnimatedMap'


const Home = () => {
  return (
    <div>
      <AmrutBanner />
      <SLogon />
      <AboutAmrut />
      <YojanaSection />
      <AmrutMissionVision />
      <AnimatedMapCircle />
      <AmrutSlider/>
      <MaharashtraShowcase />
      <AmrutStats />

    </div>
  )
}

export default Home
