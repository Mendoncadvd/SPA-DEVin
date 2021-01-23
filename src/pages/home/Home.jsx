import React, { useEffect, useState } from "react";
import InputLabel from "../../components/inputLabel/InputLabel";
import Cadastro from "../../components/cadastro/Cadastro";
import ListagemNova from "../../components/listagem/ListagemNova";
import Botao from "../../components/Botao/Botao";
import CardLateral from "../../components/cardLateral/CardLateral";
import "./home.css";
import {
  Box,
  Link,
  Typography,
  InputAdornment,
  Paper,
  Modal,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const linhas = [
  {
    id: 1,
    numero: "letra",
    assunto: "qualquer",
    interessado: "FULANO",
    descricao: "blabla",
  },
  {
    id: 2,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 3,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 4,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 5,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 6,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao: "blabla",
  },
  {
    id: 7,
    numero: "001",
    assunto: "qualquer",
    interessado: "fulano de tal",
    descricao: "TESTE",
  },
  {
    id: 8,
    numero: "001",
    assunto: "qualquer",
    interessado: "fulano de tal",
    descricao: "TESTE",
  },
   {
    id: 9,
    numero: "001",
    assunto: "qualquer",
    interessado: "fulano de tal",
    descricao: "TESTE",
  },
  {
    id: 10,
    numero: "letra",
    assunto: "qualquer",
    interessado: "FULANO",
    descricao: "blabla",
  },
   {
    id: 10,
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

  /* state e handlefunction para caixa lateral */
  const [infoLateral, setInfoLateral] = useState(true);

  const handleOpenCard = () => {
    if (infoLateral === false) {
      setInfoLateral(true);
    } else {
      setInfoLateral(false);
    }
  };

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

        {busca !== "" && (
          <Botao
            classname="botao-novo"
            variant="contained"
            color="default"
            size="small"
            text="NOVO"
            evento={handleOpenModal}
          />
        )}

        {busca === "" && (
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
        )}
      </Box>
      {busca !== "" && (
        <Box className="parteInferior">
          <Box
            className={infoLateral === false ? "lista" : "lista-ajustada"}
            onClick={handleOpenCard}
          >
            {/* <ListagemNova listagem={linhas} /> */}
          </Box>
          <Box className="infoLateral">{infoLateral === true && <CardLateral listagem={linhas}/>}</Box>
        </Box>
      )}
      {/* <Box>
        <ListagemNova listagem={linhas} />
      </Box> */}
      <Box>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box>{<Cadastro handleFunction={handleCloseModal}/>}</Box>
        </Modal>
      </Box>
    </Box>
  );
}

export default Home;
