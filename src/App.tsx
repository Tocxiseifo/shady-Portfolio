import './App.css'
import FooterSection from './components/FooterSection'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ui/ScrollToTop'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <>

      <ScrollToTop />
      <div className=" w-full h-screen" >
        <NavBar />
         <AppRouter />
        <FooterSection />
      </div>
    </>
  )
}

export default App
