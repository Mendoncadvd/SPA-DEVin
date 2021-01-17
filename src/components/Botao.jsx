import { Button } from "@material-ui/core";
import "./styles/botao.css";

const Botao = (props) => {
  const { text, color } = props;
  return (
    <Button className="botao" variant="contained" color={color} size="small">
      {text}
    </Button>
  );
};

export default Botao;
