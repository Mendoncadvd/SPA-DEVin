import {
  Box,
  TextField,
} from "@material-ui/core";

const InputLabel = (props) => {
  const {
    elevation,
    text,
    variant,
    margin,
    fullwidth,
    inputprops,
    paper,
    multiline,
    shrink,
    width,
    label,
    required,
    busca,
    handlefunction
  } = props;

  return (
  
    <Box width={"100%"}>
      <TextField
        component={paper}
        elevation={elevation}
        variant={variant}
        placeholder={text}
        label={label}
        required={required}
        margin={margin}
        fullWidth={fullwidth}
        InputProps={inputprops}
        InputLabelProps={shrink}
        multiline={multiline}
        style={{ width }}
        value={busca}
        onChange={handlefunction}
      />
    </Box>
  );
};


export default InputLabel;
