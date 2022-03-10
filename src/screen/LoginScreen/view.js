import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const View = (props) => {
    const { correo,
        name,
        password,
        handleChange,
        handleLogin,
        isLoadingSigningIn,
        isLoading } = props;
    const [pass, setPass] = useState(false);
    return <Box sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    }} >
        <Box sx={{ maxWidth: "500px", padding: "20px" }} >
            <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom component="div">
                {pass ? " Registrate introducciendo una dirección de correo electrónico y contraseña" : "Introduce tu dirección de correo electrónico para iniciar sesión."}
            </Typography>
            <Box sx={{ marginTop: "50px" }} />
            {pass && (<TextField
                margin="normal"
                required
                fullWidth
                onChange={handleChange("name")}
                value={name}
                name="name"
                label="Nombre"
                type="text"
                id="name"
            />)}

            <TextField
                margin="normal"
                required
                fullWidth
                onChange={handleChange("correo")}
                value={correo}
                name="email"
                label="Email"
                type="text"
                id="email"
            />
            <TextField
                margin="normal"
                required
                onChange={handleChange("password")}
                value={password}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
            />
            <Link href="/">
                Volver
            </Link>

            <Button sx={{ width: "100%", marginTop: "50px" }} variant="contained" disabled={isLoadingSigningIn || isLoading ? true : false} onClick={() => handleLogin(pass)}>
                {pass ? "Registrate" : "Login"}
            </Button>
            <Button sx={{ width: "100%", marginTop: "10px" }} variant="outlined" disabled={isLoadingSigningIn || isLoading ? true : false} onClick={() => { setPass(!pass) }}>
                {pass ? "Volver a Login" : "Registrate"}
            </Button>

        </Box>
    </Box>

}


export default View;