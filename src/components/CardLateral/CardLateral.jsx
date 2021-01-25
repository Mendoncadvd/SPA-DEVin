import { Box, Typography, Grid, Paper, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import placeholder from "../../utils/placeholder.png";
import "./cardlateral.css";
import Botao from "../Botao/Botao";
const CardLateral = (props) => {

  const { item, handlefunction, handledelete, handleedit } = props;
  return (
    <Box className="caixa" component={Paper} elevation={3}>
      <Box className="linha1">
        <Box>
          <Box className="pai">
            <Box className="filho">
              <img src={placeholder} className="imagem" />
            </Box>
            <Box className="header">
              <Grid className="processo">
                <Typography className="head">Processo</Typography>
                <Typography className="corpoTexto">
                  {item.numero}
                </Typography>
              </Grid>

              <Grid className="data">
                <Typography className="head">Data</Typography>
                <Typography className="corpoTexto">
                  {item.entrada}
                </Typography>
              </Grid>

              <Grid className="botao">
                <IconButton
                  size="small"
                  className="iconeFechar"
                  onClick={handlefunction}
                >
                  <Close fontSize="small" />
                </IconButton>
              </Grid>
              <Grid className="assunto">
                <Typography className="head">Assunto</Typography>
                <Typography className="corpoTexto">{item.assunto}</Typography>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="linha2">
        <Typography className="head">Interessados</Typography>
        <Grid container spacing={1}>
          <Grid
            item
            xs={item.interessados.length > 3 ? 6 : 12}
            className="grid-condicional"
          >
            {item.interessados.map((interessado, index) => (
              <Typography key={index} className="corpoTexto">
                {interessado}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box className="linha3">
        <Grid>
          <Typography className="head">Descrição</Typography>
          <Typography className="corpoTexto">{item.descricao}</Typography>
        </Grid>
      </Box>
      <Box className="linha4">
        <Botao
          classname="botao-remover"
          variant="contained"
          color="default"
          size="small"
          text="REMOVER"
          evento={() => handledelete(item.id)}

        />
        <Botao
          classname="botao-editar"
          variant="contained"
          color="primary"
          size="small"
          text="EDITAR"
          evento={handleedit}
        />
      </Box>
    </Box>
  );
};

export default CardLateral;
