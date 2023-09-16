import './main.scss';
import me from '../../resources/img/main/me.png';

const Main = () =>{
	return(
		<div id='main' className="main"> 
		<div className="main_img">
				<img src={me} alt="me" />
			</div>
			<div className="main_content">
				<div className="text_small">
					Hi, I am Denis
				</div>
				<div className="main_title">
					I create <span className="highlight">web application</span> and <span className="highlight"> websites </span>
				</div>	
				<div className="text">
				As a Front End web developer, I have hands-on experience in building and maintaining high quality web applications that are efficient, secure, and user-friendly. 
				</div>
				<div className='main_button'>
					<a href='#contactme' >
						<button>
							Get In Touch
						</button>
					</a>
				</div>
			</div>
			
		</div>
	)
}

export default Main;