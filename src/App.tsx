import './App.css'
import FooterSection from './components/FooterSection'
import NavBar from './components/NavBar'
import ScrollToTop from './components/ui/ScrollToTop'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <ScrollToTop />
      <NavBar />
      <AppRouter />
      <FooterSection />
    </div>
  )
}

export default App
