import { Box, Typography, Grid, Paper, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import placeholder from "../../utils/placeholder.png";
import "./cardlateral.css";
const CardLateral = (props) => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const { numero, data, assunto, interessados, descricao, listagem } = props;

  return (
    <Box className="caixa" component={Paper} elevation={3}>
      <Box className="linha1">
        <Box>
          <img src={placeholder} className="imagem" />
        </Box>

        <Grid>
          <Typography className="head">Processo</Typography>
          <Typography>
            Processo
            {/* {numero} */}
          </Typography>
          <Typography className="head">Assunto</Typography>
          <Typography>
            Assunto
            {/* {Assunto} */}
          </Typography>
        </Grid>
        <Grid>
          <Typography className="head">Data</Typography>
          <Typography>
            Data
            {/* {Data} */}
          </Typography>
        </Grid>
        <Grid>
          <IconButton size="small" className="iconeFechar">
            <Close fontSize="small" />
          </IconButton>
        </Grid>
      </Box>

      <Box className="linha2">
        <Typography className="head">Interessados</Typography>
        <Box>
          <Grid container spacing={1}>
            {listagem.length > 0 &&
              listagem.map((linha) => (
                <Grid
                  item
                  xs={linha.interessado.length > 3 ? 6 : 12}
                  key={linha.key}
                >
                  <Typography>{linha.interessado}</Typography>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>

      <Box className="linhas2">
        <Grid>
          <Typography className="head">Descrição</Typography>
          <Typography>{text}</Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default CardLateral;
