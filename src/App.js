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
import Agra from './Pages/Agra'
import Forgotpassword from './Pages/Forgotpassword'
import Covid from './Pages/Covid'
import Audi from './Pages/Audi'
import Bmw from './Pages/Bmw'
import Mercedes from './Pages/Mercedes'
import Footer from './components/Footer'

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
          <Route path="/Agra" element={<Agra />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          <Route path="/Covid" element={<Covid />} />
          <Route path="/Audi" element={<Audi />} />
          <Route path="/Bmw" element={<Bmw />} />
          <Route path="/Mercedes" element={<Mercedes />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App;
