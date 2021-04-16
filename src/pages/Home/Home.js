import React from 'react'
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap'
import './Home.css'
import desk from './desk.png'

const Home = () => {
  return (
    <>
        <Card className="profileCard">
          <CardBody>
            <CardTitle tag="h1">Tucker Pikula</CardTitle>
          </CardBody>
            <img width="100%" src={desk} alt="Desk" id="desk"/>
          <CardBody>
          <CardText className="cardText">Hello my name is Tucker Pikula. I live in Fountain Valley California and I was a student athlete from the University of California, Irvine. I am pleased to say I am attending this bootcamp back at UCI in hopes of becoming a Full Stack Web Developer. Thank you for checking out my page!</CardText>
          </CardBody>
        </Card>
    </>
  )
}

export default Home