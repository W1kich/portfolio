import './contactme.scss';
import email from '../../resources/img/icons/email.svg';
import phone from '../../resources/img/icons/phone.svg';
import location from '../../resources/img/icons/location.svg';
import { useForm } from '@formspree/react';

function MyForm() { 
	const [state, handleSubmit] = useForm('mknlzzge');
		if (state.succeeded) {    
		return <div className='text_small'>Thank you for signing up!</div>;
	}
	return ( 
					<form onSubmit={handleSubmit}>
						<div className="contactme_form_text">
							Enter your full Name
							<input
								id="full-name"
								type="text" 
								name="name" 
								placeholder="First and Last" 
							/>
						</div>
						<div className="contactme_form_text">
							Enter your email
							<input
								id='email'
								type="email"
								name="email"
								placeholder="email@domain.tld"
							/>
						</div>
						<div className="contactme_form_text">
							Leave your message
							<textarea
								placeholder="your message"
								id="message"
								name="message"
								cols="30"
								rows="5"
							/>
						</div>
						<div className="contactme_form_button">
							<button type='submit'>Send</button>
						</div>
		</form>
	)
}

const Contactme = () =>{

	return(
		<div id='contactme' className="contactme">	
			<div className="contactme_header">
				<div className="text_small">
					Get In Touch
				</div>
				<div className="text_big">
					Contact me
				</div>
			</div>
			<div className="contactme_content">
			<div className="contactme_info">
					<div className="contactme_info_content">
						<div className="contactme_info_content_img">
							<img src={phone} alt="Call me" />
						</div>
						<div className="contactme_info_content_header">
							<div className="text_small">
								Call me
							</div>
							<div className="text_small">
									+380968848571
							</div>
						</div>
					</div>
					<div className="contactme_info_content">
						<div className="contactme_info_content_img">
							<img src={email} alt="Email me" />
						</div>
						<div className="contactme_info_content_header">
							<div className="text_small">
								Email me
							</div>
							<div className="text_small">
								denisbutko2003@gmail.com
							</div>
						</div>
					</div>
					<div className="contactme_info_content">
						<div className="contactme_info_content_img">
							<img src={location} alt="Address" />
						</div>
						<div className="contactme_info_content_header">
							<div className="text_small">
								Address
							</div>
							<div className="text_small">
									Kyiv, Ukraine
							</div>
						</div>
					</div>
				</div>
				<div className="contactme_form">
					<MyForm/>
				</div>
			</div>
		</div>
	);
}

export default Contactme;