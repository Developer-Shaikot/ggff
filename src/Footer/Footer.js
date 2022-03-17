import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
import CallIcon from '@material-ui/icons/Call';



const Footer = () => {

    const MyAddress = [


    ]


    return (
        <footer className="container">
            <div className="container">
                <div className=" ml-2">

                    <FooterCol key={4} menuTitle="" menuItems={MyAddress}>
                        <ul className="social-media list-inline">
                          
                            <li className="list-inline-item"><a href="https://api.whatsapp.com/send?phone=916362234448" target="_blank"><FontAwesomeIcon className="icon" icon={faWhatsapp} /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/gadgefy.in/" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h7 className="text-white">Mobile Contact</h7>
                            <br />
                            <br />
                            
                            <Button variant="light"><CallIcon></CallIcon>6362234448<a href="tel:6362234448" target="_blank"></a></Button> 
                            

                        </div>
                    </FooterCol>
                </div>
                
                <br />
            </div>
        </footer>

    );
};


export default Footer;