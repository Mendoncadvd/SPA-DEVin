import {Paper, Table, TableBody, TableRow, TableCell, TableContainer, TableHead} from '@material-ui/core'

const linhas =[{id: 1, numero: "000", assunto: "qualquer", interessado: "fulano", descricao: "blablabla"}]

const Listagem = () => {
    return (
        <TableContainer component={Paper} square>
            <Table>
                <TableBody>
                    {linhas.map((linha) => (
                        <TableRow key={linha.id}>
                            <TableCell>
                                {/* Lembrar de tirar a linha da celula */}
                                <TableHead align="center">Teste</TableHead>
                                <TableCell align="center">{linha.numero}</TableCell>
                            </TableCell>
                            
                            <TableCell align="center">{linha.assunto}</TableCell>
                            <TableCell align="center">{linha.interessado}</TableCell>
                            <TableCell align="center">{linha.descricao}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Listagem;