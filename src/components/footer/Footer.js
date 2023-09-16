import './footer.scss'
import github from '../../resources/img/icons/github_purple.svg';
import linkedin from '../../resources/img/icons/linkedin.svg';
import telegram from '../../resources/img/icons/telegram.svg';


const Footer = () =>{
	return (
		<div className= "footer">
			<div className="logo">
				<h3>Butko Denis</h3>
			</div>
			<div className="footer_list">
				<a href="https://github.com/W1kich" target="_blank" className="footer_link">
					<img src={github} alt="github" />
				</a>
				<a href="https://linkedin.com/in/w1kich" target="_blank" className="footer_link">
					<img src={linkedin} alt="linkedin" />
				</a>
				<a href="https://t.me/w1kich" target="_blank" className="footer_link">
					<img src={telegram} alt="telegram" />
				</a>
			</div>
		</div>
	);
};

export default Footer;