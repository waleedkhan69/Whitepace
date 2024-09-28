import React, { Fragment } from 'react'
import Navbar from './Navbar'
import About from './About'
import ProjectManage from './ProjectManage'
import WorkGather from './WorkGather'
import Extention from './Extention'
import Customize from './Customize'
import Cardplan from './Cardplan'
import Everywherepage from './Everywherepage'
import CircalData from './CircalData'

const Home = () => {
  return (
    <Fragment>
        <Navbar/>
        <About/>
        <ProjectManage/>
        <WorkGather/>
        <Extention/>
        <Customize/>
        <Cardplan/>
        <Everywherepage/>
        <CircalData/>
    </Fragment>
  )
}

export default Home