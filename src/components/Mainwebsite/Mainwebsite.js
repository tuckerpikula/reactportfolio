import main from './main.jpg'

const MainWebsite = () => {
  return (
    
    <div className="card" style={{ width: "18rem" }}>
        <img src={main} className="card-img-top" alt="MainWebsite" id="main" />
      <div class="card-body">
        <h5 class="card-title tuck">Main Website</h5>
        <p class="card-text tuck">This will be my main website moving foward after this class. This website will change dramatically after graduation.</p>
        <a href="https://www.tuckerpikula.com/" class="btn btn-dark tuck" target="_blank">View Now!</a>
      </div>
    </div>
  )
}

export default MainWebsite