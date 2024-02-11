import { Container, Box, Typography, Button, Stack, } from "@mui/material";
import React, {useState} from "react";

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Container sx={containerStyle}>
        <Box sx={Boxstyle}>
          <Typography align="center" variant="h1" gutterBottom>
            {count}
          </Typography>
          <Stack direction="row" spacing={2}>
            
          <Button variant="contained" color="success"  onClick={() => setCount(count + 1)}>Increment</Button>
          <Button variant="contained" color="secondary" onClick={()=> setCount(0)} disabled={count === 0}>Reset</Button>
          <Button variant="contained" color="error"  onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

const Boxstyle = {
  backgroundColor: "lightblue",
  borderRadius: "5px",
  width: "50%",
  padding:"80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px "

}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "700px",
}