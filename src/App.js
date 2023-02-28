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
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Lucknow from './Pages/Lucknow'
import Dehli from './Pages/Dehli'
import Jaipur from './Pages/Jaipur'

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
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Dehli" element={<Dehli />} />
          <Route path="/Lucknow" element={<Lucknow />} />
          <Route path="/Jaipur" element={<Jaipur />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
