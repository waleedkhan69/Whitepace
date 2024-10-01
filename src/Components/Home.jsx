import React, { Fragment } from 'react'
import Navbar from './Navbar'
import About from "./About"
import ProjectManage from "./ProjectManage"
import WorkGather from "./WorkGather"
import Extension from "./Extention"
import Customize from "./Customize"
import CardPlan from "./CardPlan"
import EverywherePage from "./Everywherepage"
import CircleData from "./CircalData"
import Sponsor from "./Sponser"
import FavoriteApp from "./Faviretapp"
import CarouselCard from "./Crousalcard"
import Bottompace from './Bottompace'
import Bottom from './Bottom'
import Footer from './Footer'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <About />

      <ProjectManage />
      <WorkGather />

      <Extension />
      <Customize />
      <CardPlan />

      <EverywherePage />
      <CircleData />
      <Sponsor />
      <FavoriteApp />
      <CarouselCard/>
      <Bottompace/>
      <Bottom/>
      <Footer/>
    </Fragment>
  )
}

export default Home
