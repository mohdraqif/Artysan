import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import '../App.css'
import logo from "../images/logo.png";


const Footer = () => {
  return (
  <footer className="footer-distributed" id="footer">
		<div className="footer-left">
		<Link smooth to="#home">
      <img src={logo} width="200px" alt="Artysan"/>
    </Link>
		</div>
		<div className="footer-center">
			<h2>You know where we are</h2>
			<div className="part">
				<i className="fa fa-phone"></i>
				<p><span>Make A Call At</span>+91 783890XXXX</p>
			</div>
			<div className="part">
			<i className="fa fa-map-marker"></i>
				<p><span>Check Us Out At</span><a href="/">www.example.in</a></p>
			</div>
			<div className="part">
			<i className="fa fa-envelope"></i>
			<a href="mailto:example@gmail.com">example@gmail.com</a>
			</div>
		</div>
 
		<div className="footer-right">
			<h2>Follow us on</h2>
			<div className="footer-icons">
				<a href="https://www.facebook.com/mohd.raqif.5" target="_blank" rel="noopener noreferrer">FB</a>
				<a href="https://www.instagram.com/mohd_codes" target="_blank" rel="noopener noreferrer">INS</a>
				<a href="https://twitter.com/mohdraqif1" target="_blank" rel="noopener noreferrer">TW</a>
				<a href="https://www.youtube.com/channel/UC8OaiXv5oTYm_0wJ0R7KKyg" target="_blank" rel="noopener noreferrer">YT</a>
				<a href="https://medium.com/@mohdraqif1" target="_blank" rel="noopener noreferrer">MD</a>
			</div>
		</div>
		<div className="footer-bottom">
			<p>Copyrights 2020 Artysan | Made by Mohd.Raqif with React</p>
		</div>
	</footer>
  );
}

export default Footer;
