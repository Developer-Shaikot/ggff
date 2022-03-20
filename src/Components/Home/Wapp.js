import React from 'react';
import wapp from '../../Gadgefy/WhatsApp.svg_prev_ui.png';
import './Wapp.css'

const Wapp = () => {
    return (
        <div className="whatsapp_float">

            {/* <a href="https://api.whatsapp.com/send?phone=916362234448" target="_blank"><FontAwesomeIcon className="whatsapp_float_btn" icon={faWhatsapp} /></a> */}

            <a href="https://wa.me/916362234448" target="_blank"><img src={wapp} width="55px" className="whatsapp_float_btn dot" /></a>

        </div>
    );
};

export default Wapp;