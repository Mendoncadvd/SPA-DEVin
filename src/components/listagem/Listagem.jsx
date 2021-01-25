import {
  Box,
  Grid,
  ListItemText,
  ListItem,
  Paper,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import "./listagem.css";
import placeholder from "../../utils/placeholder.png";
const useStyle = makeStyles(() => ({
  root: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#757575",
    width: "20%",
    marginBottom: "10px",
  },

  container: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    color: "black 87%",
    width: "20%",
  },
}));

function ListagemNova(props) {
  const { listagem, handlefunction, display} = props;
  const classes = useStyle();
  return listagem?.map((linha) => (
    <Box component={Paper} className="tabela-container" elevation={3} onClick={() => handlefunction(linha.id) }>
      <ListItem key={linha.id}>
        {display === false && <img className="imagem" src={placeholder} alt="PlaceHolder" />}
        <ListItemText className="numero" key={Math.random().toString(36).substr(2, 9)}>
          <Grid classes={{ root: classes.root }} key={Math.random().toString(36).substr(2, 9)}>Número</Grid>
          <Grid classes={{ container: classes.container }}>{linha.numero}</Grid>
        </ListItemText>
        <ListItemText className="assunto" key={Math.random().toString(36).substr(2, 9)}>
          <Grid classes={{ root: classes.root }} key={Math.random().toString(36).substr(2, 9)}>Assunto</Grid>
          <Grid classes={{ container: classes.container }} key={Math.random().toString(36).substr(2, 9)}>
            {linha.assunto}
          </Grid>
        </ListItemText>
        <ListItemText className="interessados" key={Math.random().toString(36).substr(2, 9)}>
          <Grid classes={{ root: classes.root }} key={Math.random().toString(36).substr(2, 9)}>Interessado</Grid>
          <Grid classes={{ container: classes.container }} key={Math.random().toString(36).substr(2, 9)}>
            {linha.interessados}
          </Grid>
        </ListItemText>
        {display === false && 
          <ListItemText key={Math.random().toString(36).substr(2, 9)}>
            <Grid classes={{ root: classes.root }} key={Math.random().toString(36).substr(2, 9)}>Descrição</Grid >
            <Grid className="descricao" classes={{ container: classes.container }} key={Math.random().toString(36).substr(2, 9)}>
              {linha.descricao}
            </Grid>
          </ListItemText>
        }
      </ListItem>
    </Box>
  ));
}

export default ListagemNova;
