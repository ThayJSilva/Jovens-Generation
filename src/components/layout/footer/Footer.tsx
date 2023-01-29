import { Box, Grid, Typography } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box className='siga' paddingTop={10} display="flex" alignItems="center" justifyContent="center">
                            <Typography className='textos' variant="subtitle2" gutterBottom style={{ color: "white" }} >Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box className="box2">
                            <a href="#" target="_black">
                                <FacebookIcon className='redes' fontSize="small" />
                            </a>
                            <a href="#" target="_blank">
                                <InstagramIcon className='redes' fontSize="small" />
                            </a>
                            <a href="#" target="_blank">
                                <LinkedInIcon className='redes' fontSize="small" />
                            </a>

                        </Box>
                        <Box>
                            <Typography className='textos' variant="subtitle2" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;