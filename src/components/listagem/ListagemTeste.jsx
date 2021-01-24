import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState, React } from "react";
import "./listagem.css";
const useStyles = makeStyles({
  head: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#757575",
    width: "20%",
    borderBottom: "none",
  },
  body: {
    fontFamily: "Montserrat",
    fontSize: "14px",
    color: "black 87%",
    width: "20%",
    borderBottom: "none",
  },
});
const handleClick = () =>{
  console.log("teste")
}
/* O NOME DO EVENTO DE CLICAR NA TABELA SERA COM O onRowClick */
const ListagemTeste = (props) => {
  const { listagem } = props;
  const classes = useStyles();

  return (
    <>
      {listagem?.map((linha) => (
        
        <TableContainer
          onClick={handleClick}
          className="tabela-container"
          component={Paper}
          square
          elevation={3}
          key={linha.id}
        >
          <Table>
            <TableHead className="tabela-linha1-head">
              <TableRow>
                <TableCell
                  className="tabela-linha1-cell"
                  align="left"
                  classes={{ head: classes.head }}
                  size="small"
                >
                  Número
                </TableCell>

                <TableCell
                  className="tabela-linha1-cell"
                  align="left"
                  classes={{ head: classes.head }}
                  size="small"
                >
                  Assunto
                </TableCell>
                <TableCell
                  className="tabela-linha1-cell"
                  align="left"
                  classes={{ head: classes.head }}
                  size="small"
                >
                  Interessado
                </TableCell>

                <TableCell
                  className="tabela-linha1-cell"
                  align="left"
                  classes={{ head: classes.head }}
                  size="small"
                >
                  Descrição
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell
                  className="tabela-linha2-cell"
                  align="left"
                  classes={{ body: classes.body }}
                  size="small"
                >
                  {linha.numero}
                </TableCell>
                <TableCell
                  className="tabela-linha2-cell"
                  align="left"
                  classes={{ body: classes.body }}
                  size="small"
                >
                  {linha.assunto}
                </TableCell>
                <TableCell
                  className="tabela-linha2-cell"
                  align="left"
                  classes={{ body: classes.body }}
                  size="small"
                >
                  {linha.interessado}
                </TableCell>
                <TableCell
                  className="tabela-linha2-cell"
                  align="left"
                  classes={{ body: classes.body }}
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

export default ListagemTeste;
