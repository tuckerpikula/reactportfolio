import cactus from './cactus.png'


const CactusJack = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={cactus} className="card-img-top" alt="CactusJack" id="cactus" />
      <div class="card-body">
        <h5 class="card-title tuck">Cactus Jack</h5>
        <p class="card-text tuck">Check out Cactus Jack! The website we created for project 2. It's a simple blog showing
        anything and everything about
        Travis Scott.
        </p>
        <a href="https://cactus-jack.herokuapp.com/" class="btn btn-dark tuck" target="_blank">View Now</a>
      </div>
    </div> 
  )
}

export default CactusJack