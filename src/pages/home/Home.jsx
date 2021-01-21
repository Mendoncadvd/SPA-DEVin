import React, { useEffect, useState } from "react";
import InputLabel from "../../components/InputLabel";
import Cadastro from "../../components/cadastro/Cadastro";
import Listagem from "../../components/listagem/Listagem";
import "./home.css";
import {
  Box,
  Link,
  Typography,
  InputAdornment,
  Paper,
  Modal,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const linhas = [
  {
    id: 1,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 1,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 1,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 1,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 1,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 1,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },

  {
    id: 2,
    numero: "001",
    assunto: "qualquer",
    interessado: "fulano de tal",
    descricao: "TESTE",
  },
];

function Home() {
  /* Functions e State do modal */
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const [openModal, setOpenModal] = useState(false);

  /* State do TextField de pesquisa */
  const [busca, setBusca] = useState("");
console.log(busca)
  return (
    
    <Box className="main">
      <Box m={4} className={busca === "" ? "home" : "home-posicionada"}>
        
        <Typography
          className={busca === "" ? "titulo" : "titulo-lateral"}
          align="center"
          variant="h5"
          component="h2"
        >
          Busca de processos
        </Typography>
        

        
        <InputLabel
          paper={Paper}
          className="input" 
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
            ),
          }}
          busca={busca}
          setBusca={setBusca}
        />
        
        {busca === "" &&
          <Typography
          className="subtitulo"
          variant="h6"
          component="h3"
          gutterBottom
          align="center"
        >
          Você pode criar um novo processo{" "}
          {
            <Link href="#" onClick={handleOpenModal}>
              clicando aqui.
            </Link>
          }
        </Typography>
        }

      </Box>
      {busca != "" && (
        <Box className="lista" m={10}>
          <Listagem listagem={linhas} />
        </Box>
      )}
      <Box>
        <Modal open={openModal} onClose={handleCloseModal}>
          {<Cadastro handleFunction={handleCloseModal} />}
        </Modal>
      </Box>
    </Box>
  );
}

export default Home;
