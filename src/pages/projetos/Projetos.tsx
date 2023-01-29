import { Box, Grid } from '@material-ui/core';
import './Projeto.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Projetos() {
    return (
        <>
            <div className='prj'>
                <h1>Projetos</h1>
                <p>Projetos Integradores da Generation Brasil</p>
                <a href="/adicionarprojeto"><button className="adc">Adicionar Projeto</button></a>
            </div>
            <div className='container'>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 170 }}
                            image="https://media.discordapp.net/attachments/1009427050672689285/1056583421771657317/IMG_7558.jpg?width=884&height=663"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Jovens em Ação Generation!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                “Mesmo que algo pareça difícil, nunca desista antes de tentar”.

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Saiba mais</Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 170 }}
                            image="https://media.discordapp.net/attachments/1009427050672689285/1056583422052671529/IMG_7554.jpg?width=884&height=663"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Jovens em Ação Generation!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                “Você é o único que entende as suas dificuldades, por isso motive se a prosseguir”

                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Saiba mais</Button>
                        </CardActions>
                    </Card>
                </div>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 170 }}
                            image="https://media.discordapp.net/attachments/1020057280043040859/1069337439467999292/Screenshot_20230129-1613484.png"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                Jovens em Ação Generation!
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Batalhando e conquistando o que almeja, Encare seus medos de frente!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Saiba mais</Button>
                        </CardActions>
                    </Card>

                </div>

            </div>


        </>

    )
}

export default Projetos;