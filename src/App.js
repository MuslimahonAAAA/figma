
import './App.css';
import Banner from './components/Banner/Banner';
import CreamsReview from './components/CreamsReview/CreamsReview';
import FlowerSection from './components/FlowerSection/FlowerSection';
import Footer from './components/Footer/Footer';
import Hair from './components/Hair/Hair';
import Header from './components/Header/Header';
import InfoGallery from './components/InfoGallery/InfoGallery';
import Navbar from './components/Navbar/Navbar';
import Pro from './components/Pros/Pro';
import Sectionone from './components/Sectionone/Sectionone';
import Sectiontwo from './components/Sectiontwo/Sectiontwo';

function App() {
  return (
    <div className="App">
<Header/>
<Navbar/>
<Banner/>
<Sectionone/>
<CreamsReview/>
<Sectiontwo/>
<Pro/>
<InfoGallery/>
<Hair/>
<FlowerSection/>
<Footer/>


        </div>
  );
}

export default App;
