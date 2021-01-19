import { Box, Typography, Paper, Modal, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./cadastro.css"; 
import "../../components/styles/botao.css";
import Botao from "../Botao";
import InputLabel from "../InputLabel";

const Cadastro = (props) => {
  const {handleFunction} = props;
  return (
    
    <Box component={Paper} className="cadastro" width="60%" square>
      <Box className="topoCadastro">
        <Typography className="subtitulo" variant="h3" component="h2">
          Cadastro de Processo
        </Typography>
        <IconButton size="small" className="iconeFechar" onClick={handleFunction}>
          <Close fontSize="small" />
        </IconButton>
      </Box>
      <Box>
        {/* <InputCadastro label="Assunto" multiline={false} /> */}
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
        />
        {/* <InputCadastro label="Interessados" multiline={true} /> */}
        <InputLabel
          variant="standard"
          margin="normal"
          multiline={false}
          label="Interessados"
          shrink={{
            shrink: true,
          }}
          required={true}
          width={400}
        />
        <Box className="adicionarButton">
          {/* <InputCadastro label="Novo Interessado" multiline={false} /> */}
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
          />
          <Botao
            classname="adicionar"
            variant="contained"
            color="default"
            size="small"
            text="ADICIONAR"
          />
          {/* <Button
          className="adicionar"
          variant="contained"
          color="default"
          size="small"
        >
          ADICIONAR
        </Button> */}
        </Box>

        <Box className="multilineInput">
          {/* <InputCadastro label="Descrição" multiline={true} width={700} /> */}
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
          />
        </Box>

        <Box className="salvarButton">
          <Botao
            classname="salvar"
            variant="contained"
            color="primary"
            size="small"
            text="SALVAR"
          />
          {/* <Button
          className="salvar"
          variant="contained"
          color="primary"
          size="small"
        >
          SALVAR
        </Button> */}
        </Box>
      </Box>
    </Box>
    
  );
};

export default Cadastro;
