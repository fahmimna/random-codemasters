import { Slide, ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navigation from './components/Navigation'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        theme="colored"
        hideProgressBar="true"
        autoClose="3000"
        draggable="false"
        transition={Slide}
      />
    </>
  )
}

export default App
