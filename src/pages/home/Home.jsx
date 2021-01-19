import React, { useState } from "react";
import InputLabel from "../../components/InputLabel";
import Cadastro from '../../components/cadastro/Cadastro';
import Listagem from '../../components/listagem/Listagem';
import "./home.css"; 
import { Box, Link, Typography,InputAdornment, Paper, Modal} from "@material-ui/core";
import {Search} from '@material-ui/icons'

function Home() {
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = ()=> {
    setOpenModal(false)
  }
  const [openModal, setOpenModal] = useState(false)

  return (
    <Box className="home">
      <Box m={4}>
      <Typography className="titulo" align="center" variant="h5" component="h2">
        Busca de processos
      </Typography>
      <InputLabel
        paper={Paper}
        className="input-inicial"
        elevation={2}
        variant="outlined"
        text="Pesquise por uma informação do processo"
        margin="dense"
        fullwidth={true}
        inputprops={{
          endAdornment: (
            <InputAdornment>
                    <Search />
            </InputAdornment>
        )
        }}
      />
      <Typography
        className="subtitulo"
        variant="h6"
        component="h3"
        gutterBottom
        align="center"
      >
        Você pode criar um novo processo {<Link href="#" onClick={handleOpenModal}>clicando aqui.</Link>}
      </Typography>
      </Box>
      <Box m={4}>
        <Listagem />
      </Box>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
      >
          <Cadastro handleFunction={handleCloseModal}/>
      </Modal>
    </Box>
  );
}

export default Home;
