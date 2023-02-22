import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './Pages/Explore'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import More from './Pages/More'
import Support from './Pages/Support'
import Header from './components/Header'
import Services from './Pages/Services'
import Brands from './Pages/Brands'
import Oneview from './Pages/Oneview'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/more" element={<More />} />
          <Route path="/support" element={<Support />} />
          <Route path="/services" element={<Services />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/oneview" element={<Oneview />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
