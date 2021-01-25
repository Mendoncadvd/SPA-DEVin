import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import "../mensagem/mensagem.css";
export default function Mensagem(props) {
  const { text } = props;
  return (
    <Box component={Paper} className="mensagem" elevation={3}>
      <Typography className="texto">{text}</Typography>
    </Box>
  );
}
