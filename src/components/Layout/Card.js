import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const ResponsiveCard = () => {
    return <Card sx={{ width: 350, height: 200, marginTop: 5 }}>
        <Box sx={{
            width: "100%", height: "80px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center", backgroundColor: "#F96666"
        }}>
            <Typography variant="h5" color="secondary" gutterBottom component="div">
                Topicos
            </Typography>
        </Box>
        <Box sx={{ width: "100%", paddingLeft: "10px", paddingRight: "10px" }}>
            <Typography variant="h6" gutterBottom component="div">
                Tema
            </Typography>
            <Typography variant="p" gutterBottom component="div">
                Contenido
            </Typography>
        </Box>
        <CardActions sx={{ display: "flex" }} >
            <Typography variant="p" gutterBottom component="div">
                hace 1 minuto
            </Typography>
            <Button sx={{ marginLeft: "auto" }} variant="contained">Subcribirse</Button>
        </CardActions>
    </Card>
}

export const Filter = () => {
    return <Card sx={{ width: 150, height: 50, marginTop: 2 }}>
        <Box sx={{
            width: "100%", height: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center", backgroundColor: "#cbcbcb"
        }}>
            <Typography variant="h5" gutterBottom component="div">
                Topicos
            </Typography>
        </Box>
    </Card>
}