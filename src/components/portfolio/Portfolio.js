import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './potrfolio.scss';

import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';


import GitHub from '../../resources/img/icons/github.svg';
import arrow from '../../resources/img/portfolio/vector.svg';
import marvel from '../../resources/img/portfolio/marvel.png';
import vasvikna from '../../resources/img/portfolio/vasvikna.png';
import food from '../../resources/img/portfolio/food.png';
import boots from '../../resources/img/portfolio/boots.png';
import form from '../../resources/img/portfolio/form.png';
import growfy from '../../resources/img/portfolio/growfy.png';
import heropanel from '../../resources/img/portfolio/heropanel.png';




const Portfolio = () =>{

	const card = [
		{img: marvel, title: 'MarvelAPI', text: 'Created on React using API and various libraries.', link : "https://w1kich.github.io/marvelAPI/"},
		{img: vasvikna, title: 'Vasvikna', text: 'Created in JavaScript from various libraries of different relevance.', link : "https://vasvikna.netlify.app"},
		{img: food, title: 'Food menu site', text: 'Created in JavaScript using the latest developments.', link : "https://healthy-food-js.netlify.app"},
		{img: form, title: 'Form', text: 'Pure ReactApp implemented on class components, work with filters.', link : "https://w1kich.github.io/form/"},
		{img: growfy, title: 'Grofwy', text: 'The response site is made on the basis of the layout.', link : "https://w1kich.github.io/figma2/"},
		{img: boots, title: 'Bootstrap', text: 'The ent	ire site is built using Bootstrap.', link : "https://w1kich.github.io/bootstrap/"},
		{img: heropanel, title: 'Hero panel', text: 'The site is written in React using Redux.', link : "https://w1kich.github.io/heroadminpanel/"}
	]


	const settings = {
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	const cards = (arr) =>{
		const elements = arr.map((item) =>{
		const uniqueKey = uuidv4();
			return(
				<div key={uniqueKey}>
					<div className="portfolio_card"  >
						<div className="portfolio_card_imgbox">
							<img src={item.img} alt="" />
						</div>
						<div	div className="portfolio_card_header">
							<div className="portfolio_card_title ">{item.title}</div>
							<div className="portfolio_card_text text_small">{item.text}</div>
						</div>
						<div className="portfolio_card_link">
							<a href={item.link} target="_blank" rel="noreferrer">
								Visit site 
								<img src={arrow} alt="" />
							</a>
							<hr/>
						</div>
					</div>
				</div>
			)
		});
		return elements;
	}

	return(
		<div id='portfolio' className="portfolio">
			<div className="portfolio_header">
				<div className="portfolio_header_title">
					<div className="text_small">Recent Projects</div>
					<div className="text_big">My Portfolio</div>
				</div>
				<div className="portfolio_header_button">
					<a href="https://github.com/W1kich" target="_blank" rel="noreferrer">
					<button>
						<img src={GitHub} alt="GitHub" /> Visit My GitHub
					</button>
					</a>
					
				</div>
			</div>
			<Slider {...settings} >
				{cards(card)}
			</Slider>
		</div>
	)
}

export default Portfolio;
