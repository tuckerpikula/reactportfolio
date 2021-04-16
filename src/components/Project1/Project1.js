import beewell from './beewell.png'


const Project1 = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={beewell} className="card-img-top" alt="BeeWell" id="beeWell" />
      <div class="card-body">
        <h5 class="card-title tuck">BeeWell</h5>
        <p class="card-text tuck">Check out BeeWell! The website we created for project 1. It's a health and nutrition application that allows you to search for your daily caloric intake based off of your girls of either wanting to gain weight, lose weight, or maintain weight.  It also tracks your daily weight and searches for food recipes to match your new healthy lifestyle. Enjoy!</p>
        <a href="https://ohskie3.github.io/Project-1/" class="btn btn-dark tuck" target="_blank">View Now!</a>
      </div>
    </div> 
  )
}

export default Project1