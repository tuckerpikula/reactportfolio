import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Router>
        <div>

          <Navbar />
          <Switch>

            <Route exact path='/reactportfolio/'>
              <Home />
            </Route>

            <Route path='/reactportfolio/portfolio'>
              <Portfolio />
            </Route>

            <Route path='/reactportfolio/contact'>
              <Contact />
            </Route>

          </Switch>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>

    </>
  )
}

export default App