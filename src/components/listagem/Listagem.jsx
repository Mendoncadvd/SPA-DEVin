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
const linhas = [
  {
    id: 1,
    numero: "000",
    assunto: "qualquer",
    interessado: "fulano",
    descricao:
      "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla",
  },
];

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
    width:"20%"
  },
});
/* O NOME DO EVENTO DE CLICAR NA TABELA SERA COM O onRowClick */
const Listagem = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} square elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
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
          {linhas.map((linha) => (
            <TableRow key={linha.id}>
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Listagem;
