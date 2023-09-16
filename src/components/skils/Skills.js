import './skills.scss'
import react from '../../resources/img/skils/react.svg';
import redux from '../../resources/img/skils/redux.svg';
import javascript from '../../resources/img/skils/javascript.svg';
import nodejs from '../../resources/img/skils/nodejs.svg';
import web from '../../resources/img/skils/web.svg';
import api from '../../resources/img/skils/api.svg';

import { v4 as uuidv4 } from 'uuid';


const skils = [
	{img: react, title: 'React', text: 'I have extensive experience in developing applications using the React library. I am able to create components according to best practices, working with state, props, and context to build high-quality interfaces.'},
	{img: redux, title: 'Redux', text: 'I effectively use the Redux library to manage application state. I am able to create effective gears, actions, and connectors to ensure unambiguous and convenient application state.'},
	{img: javascript, title: 'JavaScript ', text: 'I have a deep understanding of the JavaScript language and its ecosystem. Confidently use modern ES6+ standards to develop dynamic and efficient web applications.'},
	{img: nodejs, title: 'Node.js', text: 'My expert level of Node.js and deep understanding of JavaScript allows me to develop dynamic and efficient web applications using modern ES6+ standards.'},
	{img: web, title: 'Web Development', text: 'I have practical experience in developing websites from scratch. From creating architecture and design to implementation and support. I am able to provide excellent loading speed and responsiveness of the site by optimizing code and resources.'},
	{img: api, title: 'API', text: 'I have experience in working with various APIs for receiving and sending data. I am able to effectively interact with the server, process responses, and execute asynchronous requests to ensure smooth application performance'},
]

const cards = (arr) =>{
	const elements = arr.map((item) =>{
		const uniqueKey = uuidv4();
		return(
			<div className="skills_card" key={uniqueKey}>
				<div className="skills_card_logo">
					<img src={item.img} alt={item.title} />
				</div>
				<div className="skills_card_title">
					{item.title}
				</div>
				<div className="skills_card_text text_small">
					{item.text}
				</div>
			</div>
		)
	});

	return(
		<div className="skills_cards">
			{elements}
		</div>
	)
}

const Skills = () =>{

	return(
		<div id='skills' className="skills">
			<div className="skills_header">
				<div className="text_small">My skills</div>
				<div className="text_big">My Expertise</div>
			</div>
				{cards(skils)}
		</div>
	);
};

export default Skills;