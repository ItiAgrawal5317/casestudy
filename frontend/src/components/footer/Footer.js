import React from "react";
import { Link } from "react-router-dom";
//import { Divider } from "@material-ui/core";

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box style={{display:"flow-root"}}>
	<h1 style={{ color: "#ff3f6c",
				textAlign: "center",
				marginTop: "-50px" }}>
		100% ORIGINAL guarantee for all products at myntra.com
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<Link to="/contactus" style={{textDecoration:'none'}}>Contact Us</Link>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="http://localhost:3000/products">Dresses</FooterLink>
			<FooterLink href="http://localhost:3000/products">Sarees</FooterLink>
			<FooterLink href="http://localhost:3000/products">Lehenga Cholis</FooterLink>
			<FooterLink href="http://localhost:3000/products">Jumpsuits</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="http://localhost:3000/contactus">Bengaluru</FooterLink>
			<FooterLink href="http://localhost:3000/contactus">Pune</FooterLink>
			<FooterLink href="http://localhost:3000/contactus">Delhi</FooterLink>
			<FooterLink href="http://localhost:3000/contactus">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	
	<div className="contentdata" 
	style={{lineHeight: '18px',
    color: '#94969f',
    fontSize: '14px',
    borderTop: '1px solid #eaeaec',
    margin: '15px 0 0',
	paddingLeft: '250px',
	paddingRight: '200px'
	 }}>
		<h1 style={{fontSize: '17px', color: 'black'}}> <strong> ONLINE SHOPPING MADE EASY AT MYNTRA </strong> </h1>
	<p>
	If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
	</p>
	<h3 style={{color: 'black'}}>
		<strong>AFFORDABLE FASHION AT YOUR FINGERTIPS</strong>
	</h3>
	<p>
	Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.
	</p>
	<h3 style={{color: 'black'}}>
		<strong>MYNTRA APP</strong>
	</h3>
	<p>
	Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device today and experience shopping like never before!
	</p>
	<h3 style={{color: 'black'}}>
		<strong>HISTORY OF MYNTRA</strong>
	</h3>
	<p>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
		The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before
	</p>
	<h3 style={{color: 'black'}}>
		<strong>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</strong>
	</h3>
	<p>
	Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your favourite brands with price options for different products in one place. A user-friendly interface will guide you through your selection process. Comprehensive size charts, product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes customer-friendliness to the next level.
	Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions
	</p>
	</div>
	</Box>
);
};
export default Footer;
