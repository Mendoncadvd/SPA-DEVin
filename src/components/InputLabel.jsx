import {Box, IconButton, InputAdornment, TextField, Paper} from '@material-ui/core'
import {Search} from '@material-ui/icons'

const InputLabel = (props) => {
    const { text } = props;
    return (
        <Box>
            <TextField 
            component={Paper}
            elevation={2}
            variant="outlined" 
            square
            placeholder={text}
            required
            margin="dense"
            fullWidth
            color="primary"
            InputProps={{
                endAdornment: (
                    <InputAdornment>
                        <IconButton
                        //aria-label vai ser o rótulo do botão
                        aria-label="clicar para pesquisar"
                        //AQUI VAI O onClick e o onMouseDown
                        >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                )
            }}
            />
        </Box>
    )
}

export default InputLabel;