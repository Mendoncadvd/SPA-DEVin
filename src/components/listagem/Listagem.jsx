import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  makeStyles,
  Box,
} from "@material-ui/core";
import { useEffect, useState, React } from "react";
import "./listagem.css";
const useStyles = makeStyles({
  root: {
    borderBottom: "none",
  },
  head: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#757575",
  },
  body: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    color: "black 87%",
    width: "20%",
  },
  novo: {
    background: "black"
  }
});

/* O NOME DO EVENTO DE CLICAR NA TABELA SERA COM O onRowClick */
const Listagem = (props) => {
  const { listagem } = props;
  const classes = useStyles();
  console.log(listagem);
  return (
    <>
      {listagem?.map((linha) => (
        <TableContainer
          className="tabela"
          component={Paper}
          square
          elevation={3}
          key={linha.id}
        >
          <Table>
            <TableHead>
              <TableRow
              hover={true}
              >
                <TableCell
                  align="left"
                  classes={{ root: classes.root, head: classes.head }}
                  size="small"
                >
                  Número
                </TableCell>

                <TableCell
                  align="left"
                  classes={{ root: classes.root, head: classes.head }}
                  size="small"
                >
                  Assunto
                </TableCell>
                <TableCell
                  align="left"
                  classes={{ root: classes.root, head: classes.head }}
                  size="small"
                >
                  Interessado
                </TableCell>
                <TableCell
                  align="left"
                  classes={{ root: classes.root, head: classes.head }}
                  size="small"
                >
                  Descrição
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={linha.id} hover={true}>
                <TableCell
                  align="left"
                  classes={{ root: classes.root, body: classes.body }}
                  size="small"
                >
                  {linha.numero}
                </TableCell>
                <TableCell
                  align="left"
                  classes={{ root: classes.root, body: classes.body }}
                  size="small"
                >
                  {linha.assunto}
                </TableCell>
                <TableCell
                  align="left"
                  classes={{ root: classes.root, body: classes.body }}
                  size="small"
                >
                  {linha.interessado}
                </TableCell>
                <TableCell
                  align="left"
                  classes={{ root: classes.root, body: classes.body }}
                  size="small"
                >
                  {linha.descricao}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </>
  );
};

export default Listagem;
