import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNav from './components/MyNav'
import Footer from './components/MyFooter'
import Welcome from './components/Welcome'


// import horrorBooks from './assets/data/horror.json';
import scifiBooks from './assets/data/scifi.json';
import BookList from './components/BookList'

function App() {

  return (
    <>
  <CustomNav/>
  <Welcome />
  <BookList arrayBook={scifiBooks} />
  <Footer/>
    </>
  )
}

export default App
