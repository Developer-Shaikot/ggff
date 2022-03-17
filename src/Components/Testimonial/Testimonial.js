import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import imgOne from '../../GadgefyDone/Illustration/Ellipse 27.png';
import imgTwo from '../../GadgefyDone/Illustration/Ellipse 28.png'
import imgThree from '../../GadgefyDone/Illustration/Ellipse 29.png'
import StarRateIcon from '@mui/icons-material/StarRate';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Testimonial = () => {
    const classes = useStyles();

    return (
        <div className="container px-3 mt-5">
            <div class="scrolling-wrapper">
            <div class="card">
            <Card sx={{ minWidth: 100 }}>
                    <CardActionArea>
                            <div class="contained">
                                <div class="image">
                                    <img style={{ borderRadius:'100px' }} className="icn" src={imgOne} alt="" />
                                </div>
                                <div class="text">
                                    <p>Darrel Steward</p>
                                    <span style={{ color:'orange' }}><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                                </div>
                            </div>
                            <CardContent>
                            <small className="pra">
                                Nulla Lorem mollit cupidatat <br /> irure. Laborum magan nulla<br />  duis ullamco cillum dolor.<br />  Voluptate exercitation<br />  incididunt aliquip deserunt <br /> reprehenderit elit laborum.
                                </small>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </div>
                <div class="card">
                    <Card sx={{ minWidth: 100 }}>
                    <CardActionArea>
                            <div class="contained">
                                <div class="image">
                                    <img style={{ borderRadius:'100px' }} className="icn" src={imgTwo} alt="" />
                                </div>
                                <div class="text">
                                    <p>Darrel Steward</p>
                                    <span style={{ color:'orange' }}><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                                </div>
                            </div>
                            <CardContent>
                                <small className="pra">
                                Nulla Lorem mollit cupidatat <br /> irure. Laborum magan nulla<br />  duis ullamco cillum dolor.<br />  Voluptate exercitation<br />  incididunt aliquip deserunt <br /> reprehenderit elit laborum.
                                </small>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </div>
                <div class="card">
                    <Card sx={{ minWidth: 100 }}>
                    <CardActionArea>
                            <div class="contained">
                                <div class="image">
                                    <img style={{ borderRadius:'100px' }} className="icn" src={imgThree} alt="" />
                                </div>
                                <div class="text">
                                    <p>Bessie Cooper</p>
                                    <span style={{ color:'orange' }}><StarRateIcon/><StarRateIcon/><StarRateIcon/><StarRateIcon/></span>
                                </div>
                            </div>
                            <CardContent>
                            <small className="pra">
                                Nulla Lorem mollit cupidatat <br /> irure. Laborum magan nulla<br />  duis ullamco cillum dolor.<br />  Voluptate exercitation<br />  incididunt aliquip deserunt <br /> reprehenderit elit laborum.
                                </small>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>

            </div>
            <footer class="pra text-center mt-5 pt-3 mb-3 ml-5 justify-content-end text-black mb-1">@Gadgefy {(new Date()).getFullYear()} Copyright All Rights Reserved</footer>
             <br />
        </div>
    );
};

export default Testimonial;