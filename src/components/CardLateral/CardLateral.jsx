import { Box, TextField } from '@material-ui/core';
import React from 'react';
import placeholder from '../../utils/placeholder.png';
import './cardlateral.css';
const CardLateral = (props) => {
    const { numero, assunto, interessados, descricao } = props;
    return(
        <Box className="caixa">
            <Box>
                <img
                    src={placeholder}
                />
                <TextField
                    defaultValue="Interessado, Interessado, Interessado, Interessado, "
                    disabled
                    className="interessados"
                >

                </TextField>

            </Box>
            <Box>

            </Box>
            <Box></Box>
        </Box>
    )
}

export default CardLateral;

