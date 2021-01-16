import {Box, Typography,Paper, Button, IconButton} from '@material-ui/core';
import {Close} from '@material-ui/icons';
import './cadastro.css';
import '../../components/styles/botao.css'
import InputCadastro from '../InputCadastro'


const Cadastro = () => {
    
    return (
        <Box 
        component={Paper}
        className="cadastro"
        width="60%"
        square
        >
            <Box className="topoCadastro">
                <Typography 
                    className="subtitulo"
                    variant="h3"
                    component="h2"
                >
                    Cadastro de Processo
                </Typography>
                <IconButton 
                    size="small"
                    className="iconeFechar"
                >
                    <Close 
                        fontSize="small"
                    />
                </IconButton>
            </Box>
            
            <InputCadastro label="Assunto" multiline={false}/>
            <InputCadastro label="Interessados" multiline={true}/>
            
            <Box className="adicionarButton">
                <InputCadastro label="Novo Interessado" multiline={false}/>  
                <Button className="adicionar" variant="contained" color="default" size="small" 
                >
                    ADICIONAR
                </Button>
            </Box>

            <Box className="multilineInput">
            <InputCadastro label="Descrição" multiline={true} width={700}/>
            </Box>

            <Box className="salvarButton">
                <Button className="salvar" variant="contained" color="primary" size="small">
                    SALVAR
                </Button>
            </Box>
        </Box>
    )
}

export default Cadastro;