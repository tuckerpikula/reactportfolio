import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Project1 from '../../components/Project1'
import Project2 from '../../components/Project2'
import Budget from '../../components/Budget'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <main class="container">
        <div class="row under">
          <div class="col-sm-6 space">
            <div class="card">
              <img
                src="https://st3.depositphotos.com/26063720/32436/v/1600/depositphotos_324367240-stock-illustration-hand-game-rock-paper-scissors.jpg"
                class="card-img-top aesthetics" alt="Rock Paper Scissors">
                <div class="card-body">
                  <h5 class="card-title tuck">Rock Paper Scissors</h5>
                  <p class="card-text tuck">Press the link to play now! You vs. the NPC in an epic showdown of a best of 5
                  Rock
                  Paper
                  Scissors game.
            </p>
                  <a href="https://tuckerpikula.github.io/rockpaperscissorsgame/" class="btn btn-dark tuck"
                    target="_blank">Play
              Now!</a>
                </div>
        </div>
            </div>
            <div class="col-sm-6 space">
              <div class="card">
                <img
                  src="https://res.cloudinary.com/teepublic/image/private/s--XPbqZu1k--/c_crop,x_10,y_10/c_fit,w_830/c_crop,g_north_west,h_1038,w_1038,x_-104,y_-391/l_upload:v1565806151:production:blanks:vdbwo35fw6qtflw9kezw/fl_layer_apply,g_north_west,x_-215,y_-502/b_rgb:000000/c_limit,f_jpg,h_630,q_90,w_630/v1590640565/production/designs/10686633_0.jpg"
                  class="card-img-top aesthetics" alt="main website">
                  <div class="card-body">
                    <h5 class="card-title tuck">Main Website</h5>
                    <p class="card-text tuck">This will be my main website moving foward after this class. This website will change dramatically after graduation.</p>
                    <a href="https://www.tuckerpikula.com/" class="btn btn-dark tuck" target="_blank">View Now!</a>
                  </div>
        </div>
              </div>
            </div>

            <div class="row under">
              <div class="col-sm-6 space">
                <div class="card">
                  <img
                    src="https://cdn5.vectorstock.com/i/1000x1000/41/39/simple-bee-icon-outline-icon-vector-19934139.jpg"
                    class="card-img-top aesthetics" alt="Bee">
                    <div class="card-body">
                      <h5 class="card-title tuck">BeeWell</h5>
                      <p class="card-text tuck">Check out BeeWell! The website we created for project 1. It's a health and nutrition application that allows you to search for your daily caloric intake based off of your girls of either wanting to gain weight, lose weight, or maintain weight.  It also tracks your daily weight and searches for food recipes to match your new healthy lifestyle. Enjoy!</p>
                      <a href="https://ohskie3.github.io/Project-1/" class="btn btn-dark tuck" target="_blank">View Now!</a>
                    </div>
    </div>
                </div>
                <div class="col-sm-6 space">
                  <div class="card">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cactus_Jack_Records_-_Logo.svg/1200px-Cactus_Jack_Records_-_Logo.svg.png"
                      class="card-img-top aesthetics" alt="Cactus Jack">
                      <div class="card-body">
                        <h5 class="card-title tuck">Cactus Jack</h5>
                        <p class="card-text tuck">Check out Cactus Jack! The website we created for project 2. It's a simple blog showing
                        anything and everything about
                        Travis Scott.
        </p>
                        <a href="https://cactus-jack.herokuapp.com/" class="btn btn-dark tuck" target="_blank">View Now</a>
                      </div>
    </div>
                  </div>
                </div>

  </main>

    </>
  )
}

export default Portfolio