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
  } = props;
  console.log(elevation, paper);
  return (
    <Box>
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
      />
    </Box>
  );
};

export default InputLabel;
