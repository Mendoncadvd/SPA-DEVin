import { Box, TextField } from "@material-ui/core";
const InputCadastro = (props) => {
  const { label, multiline, width } = props;

  return (
    <Box>
      <TextField
        variant="standard"
        label={label}
        margin="normal"
        multiline={multiline}
        fullWidth={false}
        InputLabelProps={{
          shrink: true,
        }}
        style={{ width }}
      />
    </Box>
  );
};

InputCadastro.defaultProps = {
  width: 400,
};

export default InputCadastro;
