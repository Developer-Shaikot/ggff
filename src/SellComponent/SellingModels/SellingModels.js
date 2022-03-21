import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import imgOne from '../../GadgefyDone/Icons/15-3.png'
import imgTwo from '../../GadgefyDone/Icons/16.png'
import imgThree from '../../GadgefyDone/Icons/201601060821557364.png'
import imgFour from '../../GadgefyDone/Icons/a7ii2870angleview (1).png'
import imgFive from '../../GadgefyDone/Icons/a7ii2870angleview.png'
import './SellingModels.css'

const useStyles = makeStyles({

    media: {
        width: "100px",
        height: 100,
        alignItems: "center"
    },
});

const SellingModels = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="Msell mt-3 mb-5">
                <main class="scrolling-wrapper">
                    <div className="card">
                        <div className="container">
                            <img className="models"src={imgOne} alt="" />
                                <CardContent>
                                    <p className="pra" >
                                        Nikon D3500
                                    </p>
                                </CardContent>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="container">
                            <img className="models"src={imgTwo} alt="" />
                                <CardContent>
                                    <p className="pra" >
                                        Nikon D3200
                                    </p>
                                </CardContent>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="container">
                            <img className="models"src={imgThree} alt="" />
                                <CardContent>
                                    <p className="pra" >
                                        Nikon D3100
                                    </p>
                                </CardContent>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="container">
                            <img className="models"src={imgFour} alt="" />
                                <CardContent>
                                    <p className="pra" >
                                        Canon M50
                                    </p>
                                </CardContent>
                            
                        </div>
                    </div>

                    <div className="card">
                        <div className="container">
                            <img className="models"src={imgFive} alt="" />
                                <CardContent>
                                    <p className="pra" >
                                        Canon E06
                                    </p>
                                </CardContent>
                            
                        </div>
                    </div>
                </main>
            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@My Rate {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
            <br />
        </div>
    );
};

export default SellingModels;