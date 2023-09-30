import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Title, { BRAND, NAV_LINKS } from './data/Globals'
import { Router } from './router'

function App() {

  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Title />
      <Header brand={BRAND} links={NAV_LINKS} />
      <Router />
      <Footer brand={BRAND} />
    </div>
  )
}

export default App