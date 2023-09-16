import './App.scss';
import Navbar from '../navbar/Navbar';
import Main from '../main/main';
import Skills from '../skils/Skills';
import Aboutme from '../aboutMe/AboutMe';
import Portfolio from '../portfolio/Portfolio';
import Contactme from '../contactme/Contactme';
import Footer from '../footer/Footer';

const App = () =>{
	return (
		<div className="App">
      <Navbar/>
			<Main/>
			<Skills/>
			<Aboutme/>
			<Portfolio/>
			<Contactme/>
			<Footer/>
    </div>
	)
}

export default App;
