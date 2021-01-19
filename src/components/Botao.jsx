import { Button } from "@material-ui/core";

const Botao = (props) => {
  const { classname, variant, text, color, size } = props;
  return (
    <Button className={classname} variant={variant} color={color} size={size} type="submit">
      {text}
    </Button>
  );
};

export default Botao;
