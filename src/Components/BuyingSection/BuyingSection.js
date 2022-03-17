import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './BuyingSection.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import imgOne from '../../GadgefyDone/Icons/Rectangle 67.png'
import imgTwo from '../../GadgefyDone/Icons/Rectangle 68.png'
import imgThree from '../../GadgefyDone/Icons/Rectangle 69.png'
import imgFour from '../../GadgefyDone/Icons/Rectangle 70.png'

const useStyles = makeStyles({

    media: {
        height: 150,
    },
});

export default function BuyingSection() {
    const classes = useStyles();

    return (
        <div className="bysec  container px-3">

            <div class="scrolling-wrapper">
            <div class="card">
                    <Card sx={{ minWidth: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={imgOne}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <h5 className="pra" >
                                    Moto Tab 8 India <br />Launch Tipped
                                </h5>
                                <small className="pra">
                                    Recently, it was unveiled that <br />Motorola is working to launch<br /> their Moto Tab 8 tablet in <br /> India pretty soon.<br /> 91 Mobiles revealed this.
                                </small>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </div>
                <div class="card">
                    <Card sx={{ minWidth: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={imgTwo}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <h5 className="pra" >
                                    Moto Tab 8 India <br />Launch Tipped
                                </h5>
                                <small className="pra">
                                    Recently, it was unveiled that <br />Motorola is working to launch<br /> their Moto Tab 8 tablet in <br /> India pretty soon.<br /> 91 Mobiles revealed this.
                                </small>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </div>
                <div class="card">
                    <Card sx={{ minWidth: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={imgThree}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <h5 className="pra" >
                                    Moto Tab 8 India <br />Launch Tipped
                                </h5>
                                <small className="pra">
                                    Recently, it was unveiled that <br />Motorola is working to launch<br /> their Moto Tab 8 tablet in <br /> India pretty soon.<br /> 91 Mobiles revealed this.
                                </small>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </div>
                <div class="card">
                    <Card sx={{ minWidth: 100 }}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={imgFour}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                            <h5 className="pra" >
                                    Moto Tab 8 India <br />Launch Tipped
                                </h5>
                                <small className="pra">
                                    Recently, it was unveiled that <br />Motorola is working to launch<br /> their Moto Tab 8 tablet in <br /> India pretty soon.<br /> 91 Mobiles revealed this.
                                </small>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                </div>
            </div>

        </div>
    );
}