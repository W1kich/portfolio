import './aboutme.scss'
import me from '../../resources/img/aboutme/me.png'

const AboutMe = () =>{

	return(
		<div id='aboutme' className="aboutme">			
			<div className="aboutme_content">
				<div className="text_small">
					About 
				</div>
				<div style = {{'color': '#5E3BEE'}} className="text_big">
					About Me
				</div>	
				<div  className="text">
					As a Front End web developer, I have hands-on experience in building and maintaining high quality web applications that are efficient, secure, and user-friendly. I have in-depth knowledge of various technologies such as HTML, CSS, JavaScript, React, and Node.js. My passion for development is combined with a desire to create designs that provide an intuitive user experience. I believe that the development process should be focused on meeting the user's needs. In addition, I have the ability to communicate effectively and work in a team to ensure that projects are delivered on time and on budget.
				</div>
			</div>
			<div className="aboutme_img">
				<img src={me} alt="me" />
			</div>
		</div>
	);
}

export default AboutMe;