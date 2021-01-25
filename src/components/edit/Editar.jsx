import {
  Box,
  Typography,
  Paper,
  IconButton,
  Grid,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "../cadastro/cadastro.css";
import "../../components/styles/botao.css";
import Botao from "../Botao/Botao";
import InputLabel from "../inputLabel/InputLabel";
import React, { useState } from "react";

const Editar = (props) => {
  const { handleFunction, item, salvar } = props;

  const [interessados, setInteressados] = useState([item.interessados]);

  const [interessado, setInteressado] = useState("");

  const handleAdicionaInteressado = () => {
    setInteressados([...interessados, interessado]);
    setInteressado("");
  };
  
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
          busca={item.assunto}
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
            busca={item.descricao}
          />
        </Box>

        <Box className="salvarButton">
          <Botao
            classname="salvar"
            variant="contained"
            color="primary"
            size="small"
            text="SALVAR"
            evento={salvar}
          />
        </Box>
      </Box>
      
    </Box>
  );
};

export default Editar;
