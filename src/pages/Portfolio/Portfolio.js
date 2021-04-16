import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Project1 from '../../components/Project1'
import Project2 from '../../components/Project2'
import Rockpaperscissors from '../../components/Rockpaperscissors'
import Mainwebsite from '../../components/Mainwebsite'
import './Portfolio.css'
import MainWebsite from '../../components/Mainwebsite'

const Portfolio = () => {
  return (
    <>
     
      <Row>
        <Col sm={{ size: 'auto', offset: 1}}>
          <Rockpaperscissors />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <MainWebsite />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Project1 />
        </Col>
        <Col sm={{ size: 'auto', offset: 1 }}>
          <Project2 />
        </Col>
      </Row>

    </>
  )
}

export default Portfolio