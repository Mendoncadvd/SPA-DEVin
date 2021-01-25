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
        <ListItemText>
          <Grid classes={{ root: classes.root }}>Número</Grid>
          <Grid classes={{ container: classes.container }}>{linha.numero}</Grid>
        </ListItemText>
        <ListItemText>
          <Grid classes={{ root: classes.root }}>Assunto</Grid>
          <Grid classes={{ container: classes.container }}>
            {linha.assunto}
          </Grid>
        </ListItemText>
        <ListItemText>
          <Grid classes={{ root: classes.root }}>Interessado</Grid>
          <Grid classes={{ container: classes.container }}>
            {linha.interessados}
          </Grid>
        </ListItemText>
        {display === false && 
          <ListItemText>
            <Grid classes={{ root: classes.root }}>Descrição</Grid>
            <Grid classes={{ container: classes.container }}>
              {linha.descricao}
            </Grid>
          </ListItemText>
        }
      </ListItem>
    </Box>
  ));
}

export default ListagemNova;
