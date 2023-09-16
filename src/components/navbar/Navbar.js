import './navbar.scss'
import {useState} from 'react';

const Navbar = () =>{

	const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false)
  }

	return (
		<div className= {`navbar ${isActive ? 'active' : ''}`}>
			<div className="logo">
				<h3>Butko Denis</h3>
			</div>
			<div className="navbarlist">
			<ul className={ `navMenu ${isActive ? 'active' : ''}`}>
				<li onClick={removeActive}>
					<a href='#main' className={`navLink`}>Home</a>
				</li>
				<li onClick={removeActive}>
					<a href='#aboutme' className={`navLink`}>About Me</a>
				</li>
				<li onClick={removeActive}>
					<a href='#portfolio' className={`navLink`}>My Portfolio</a>
				</li>
				<li onClick={removeActive}>
					<a href='#skills' className={`navLink`}>My Skills</a>
				</li>
				<li onClick={removeActive}>
					<a href='#contactme' className={`navLink`}>Contacts</a>
				</li>
			</ul>
			</div>				
			<div className="contact-button">
				<a href='#contactme'><button>Contact me</button></a>
				
			</div>
			<div className={`hamburger ${isActive ? `active` : ''}`}  onClick={toggleActiveClass}>
				<span className={`bar`}></span>
				<span className={`bar`}></span>
				<span className={`bar`}></span>
			</div>
		</div>
	);
};

export default Navbar;