import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import { Footer, Navbar, Details, Ticket } from "./Components"
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function App() {

  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/ticket" element={<Ticket />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </SkeletonTheme>

    </>
  )
}

export default App
