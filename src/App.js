import './App.css';
import AcademicImpact from './components/AcademicImpact';
import AssigementProvideType from './components/AssigementProvideType';
import Benifits from './components/Benifits';
import Carousel from './components/Carousel';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Writer from './components/Writer';

function App() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Benifits/>
    <Writer/>
    <AssigementProvideType/>
    <Feedback/>
    <AcademicImpact/>
    <Footer/>
    </>
  );
}

export default App;
