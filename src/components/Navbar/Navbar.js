import {
  Navbar as Navbr,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navbar = () => {
  return (

    <div>
      <Navbr className="navbar navbar-expand-lg navbar-light bg-white bordbot">
        <a class="navbar-brand hover tuck" href="/">Tucker Pikula</a>
      </Navbr>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/reactportfolio">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default Navbar