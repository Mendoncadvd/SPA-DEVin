import { Button } from "@material-ui/core";

const Botao = (props) => {
  const { classname, variant, text, color, size, evento } = props;
  return (
    <Button className={classname} variant={variant} color={color} size={size} onClick={evento} type="submit" >
      {text}
    </Button>
  );
};

export default Botao;
