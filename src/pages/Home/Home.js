import React from 'react'
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import './Home.css'

const Home = () => {
  return (
    <>
      <main class="container pics">
        <div class="row">
          <div class="col-sm-6 m-0">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src=https://www.gardeningknowhow.com/wp-content/uploads/2020/03/home-office-plants.jpg
                class="d-block w-100 aesthetics" alt="office">
            </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 m-0">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src=https://juniperoats.com/wp-content/uploads/2019/01/JuniperOats_blogposts-15-houseplants-for-minimalists.jpg
                class="d-block w-100 space aesthetics" alt="plants">
            </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <p id="info">Hello, my name is Tucker Pikula. I am a former Division 1 athlete and I played volleyball for the
          University of California, Irvine. I'm very excited to continue my education at UC Irvine and deepen my
        knowledge in full-stack web development.</p>
        </div>
        <div class="row under">
          <div class="col-sm-6">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src=https://www.tinostone.com/wp-content/uploads/2017/05/header-marbella-v.jpg
                class="d-block w-100 aesthetics" alt="house">
            </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src=https://cdn.suwalls.com/wallpapers/cars/porsche-977-turbo-35493-1920x1200.jpg
                class="d-block w-100 space aesthetics" alt="car">
            </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      </>
  )
}

export default Home