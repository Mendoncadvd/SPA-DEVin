import {
  Box,
  TextField,
} from "@material-ui/core";
import { useEffect } from "react";

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

/*   useEffect(() => {
    console.log(busca)
  }, [busca]); */
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
