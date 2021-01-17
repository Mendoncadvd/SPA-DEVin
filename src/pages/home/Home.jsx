import React from 'react';
import InputLabel from '../../components/InputLabel';
import './home.css';
import {Box, Link, Typography} from '@material-ui/core';

function Home() {
    return (
        <Box className="home">
            <Typography
                className="titulo"
                align="center"
                variant="h5"
                component="h2"
            >
                Busca de processos
            </Typography>
            <InputLabel className="input-inicial" text="Pesquise por uma informação do processo"/>
            <Typography
                className="subtitulo"
                variant="h6"
                component="h3"
                gutterBottom
                align="center"
            >
                Você pode criar um novo processo {<Link href="#">clicando aqui.</Link>}
            </Typography>
        </Box>
    )   
}

export default Home;