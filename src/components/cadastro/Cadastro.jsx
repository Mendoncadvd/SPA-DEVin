import {
  Box,
  Typography,
  Paper,
  IconButton,
  Grid,
  Modal,
  Fade,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./cadastro.css";
import "../../components/styles/botao.css";
import Botao from "../Botao/Botao";
import InputLabel from "../inputLabel/InputLabel";
import React, { useState } from "react";

const Cadastro = (props) => {
  const { handleFunction } = props;

  const [interessados, setInteressados] = useState([]);

  const [interessado, setInteressado] = useState("");

  const handleAdicionaInteressado = () => {
    setInteressados([...interessados, interessado]);
    setInteressado("");
  };
  const [modal, setModal] = useState(false)
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <Box component={Paper} className="cadastro" width="60%" square>
      <Box className="topoCadastro">
        <Typography className="subtitulo" variant="h3" component="h2">
          Cadastro de Processo
        </Typography>
        <IconButton
          size="small"
          className="iconeFechar"
          onClick={handleFunction}
        >
          <Close fontSize="small" />
        </IconButton>
      </Box>
      <Box>
        <InputLabel
          variant="standard"
          margin="normal"
          multiline={false}
          label="Assunto"
          shrink={{
            shrink: true,
          }}
          required={true}
          width={400}

        />
        <Box>
          <Box>
            <Typography>Interessados</Typography>
            <Grid style={{ maxHeight: "100px", overflow: "auto" }}>
              {interessados?.map((pessoa) => (
                <Typography>{pessoa}</Typography>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box className="adicionarButton">
          <Box>
            <InputLabel
              variant="standard"
              margin="normal"
              multiline={false}
              label="Novo Interessado"
              shrink={{
                shrink: true,
              }}
              required={true}
              width={400}
              name={interessados}
              busca={interessado}
              handlefunction={(e) => setInteressado(e.target.value)}
            />
          </Box>
          <Box>
            <Botao
              classname="adicionar"
              variant="contained"
              color="default"
              size="small"
              text="ADICIONAR"
              evento={handleAdicionaInteressado}
            />
          </Box>
        </Box>

        <Box className="multilineInput">
          <InputLabel
            variant="standard"
            margin="normal"
            multiline={false}
            label="Descrição"
            shrink={{
              shrink: true,
            }}
            required={true}
            width={700}
          />
        </Box>

        <Box className="salvarButton">
          <Botao
            classname="salvar"
            variant="contained"
            color="primary"
            size="small"
            text="SALVAR"
            evento={openModal}
          />
        </Box>
      </Box>
      <Modal
      open={modal}
      onClose={closeModal}
      >
        <Fade
        in={modal}>
          <Typography>
            Cadastro Salvo!
          </Typography>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Cadastro;
