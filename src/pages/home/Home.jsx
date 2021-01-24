import React, { useEffect, useState } from "react";
import InputLabel from "../../components/inputLabel/InputLabel";
import Cadastro from "../../components/cadastro/Cadastro";
import ListagemNova from "../../components/listagem/ListagemNova";
import Botao from "../../components/Botao/Botao";
import CardLateral from "../../components/cardLateral/CardLateral";
import "./home.css";
import RequestBackend from "../../services/RequestBackend";
import Editar from "../../components/edit/Editar";
import {
  Box,
  Link,
  Typography,
  InputAdornment,
  Paper,
  Modal,
  Fade,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

function Home() {
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const [openModal, setOpenModal] = useState(false);

  /* Function e State do TextField de pesquisa */
  const [busca, setBusca] = useState("");
  const [lista, setLista] = useState([]);

  const handleBusca = async (valor) => {
    setBusca(valor);
    const novaLista = await RequestBackend.getAssunto(busca);
    setLista(novaLista);
  };
  /* state e handlefunction para caixa lateral */
  const [infoLateral, setInfoLateral] = useState(false);

  /* State para guardar o item selecionado */

  const [idProp, setIdProp] = useState("");

  const handleOpenCard = async (id) => {
    const newInfoLateral = await RequestBackend.getID(id);
    console.log(newInfoLateral);
    setIdProp(newInfoLateral);
    setInfoLateral(true);
  };
  const handleCloseCard = () => {
    setInfoLateral(false);
  };

  /* função para deletar */
  const [popUpDelete, setPopUpDelete] = useState(false);

  const handleDelete = async (id) => {
    await RequestBackend.deletePorID(id);
    setBusca("");
    setInfoLateral(false);
    setPopUpDelete(true);
  };

  const handleClosePopUpDelete = () => {
    setPopUpDelete(false);
  };

  /* função  para editar */
  const [editar, setEditar] = useState(false);

  const handleCloseEditar = () => {
    setEditar(false);
  };
  const handleOpenEditar = () => {
    setEditar(true);
  };

  /* função para popup de editar */
  const [popUpEditar, setPopUpEditar] = useState(false);

  const handleSalvarEditar = () => {
    setBusca("");
    if (editar === true) {
      setEditar(false);
    }
    if (openModal === true) {
      setOpenModal(false);
    }
    setInfoLateral(false);
    setPopUpEditar(true);
  };

  const handleClosePopUpEditar = () => {
    setPopUpEditar(false);
  };

  /* função para popup de salvar*/
  const [popUpCadastrar, setPopUpCadastrar] = useState(false);
  const handleSalvarCadastrar = () => {
    setBusca("");
    if (editar === true) {
      setEditar(false);
    }
    if (openModal === true) {
      setOpenModal(false);
    }
    setInfoLateral(false);
    setPopUpCadastrar(true);
  };
  const handleClosePopUpCadastrar = () => {
    setPopUpCadastrar(false);
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
          handlefunction={(e) => handleBusca(e.target.value)}
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
        <Box className="box-inferior">
          <Box className="parteInferior">
            <Box className={infoLateral === false ? "lista" : "lista-ajustada"}>
              <ListagemNova listagem={lista} handlefunction={handleOpenCard} />
            </Box>
          </Box>
          {infoLateral === true && (
            <Box className="infoLateral">
              <CardLateral
                item={idProp}
                handlefunction={handleCloseCard}
                handledelete={handleDelete}
                handleedit={handleOpenEditar}
              />
            </Box>
          )}
        </Box>
      )}

      <Box>
        <Modal open={openModal} onClose={handleCloseModal}>
          <Cadastro
            handleFunction={handleCloseModal}
            salvar={handleSalvarCadastrar}
          />
        </Modal>
      </Box>

      <Box>
        <Modal open={editar} onClose={handleClosePopUpEditar}>
          <Editar
            handleFunction={handleCloseEditar}
            salvar={handleSalvarEditar}
            item={idProp}
          />
        </Modal>
      </Box>

      <Modal open={popUpDelete} onClose={handleClosePopUpDelete}>
        <Fade in={popUpDelete}>
          <Typography>Processo Deletado!</Typography>
        </Fade>
      </Modal>

      <Modal open={popUpCadastrar} onClose={handleClosePopUpCadastrar}>
        <Fade in={popUpCadastrar}>
          <Typography>Cadastro Salvo!</Typography>
        </Fade>
      </Modal>

      <Modal open={popUpEditar} onClose={handleClosePopUpEditar}>
        <Fade in={popUpEditar}>
          <Typography>Cadastro Editado!</Typography>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Home;
