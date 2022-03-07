import Box from '@mui/material/Box';
import images from "../../assets/index"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const View = () => {
    return <Box
        sx={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            backgroundSize: "cover",
            overflow: "auto",
            backgroundImage: `url(${images.bg})`,
        }}
    >
        <Box sx={{
            width: "100%",
            height: "100vh",
            background: "linear-gradient(180deg, rgba(255,255,255,.2) 39%, rgba(51,56,57,1) 96%) center center / 100% 100% no-repeat",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "35%"
            }}>
                <Stack spacing={2} direction="row">
                    <Link href="/login">
                        <Button sx={{ width: "150px" }} variant="contained">Login</Button>
                    </Link>
                    <Link href="/home">
                        <Button sx={{ width: "150px", }} color="secondary" variant="outlined">Invitado</Button>
                    </Link>
                </Stack>
            </Box>
        </Box>
    </Box>
}


export default View;