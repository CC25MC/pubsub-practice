import { useState, forwardRef } from "react"
import { ResponsiveAppBar } from "../../components"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { ResponsiveCard, Filter } from "../../components";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CachedIcon from '@mui/icons-material/Cached';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const View = (props) => {
    const { topico, contenido, tema, saveData, handleChange, user, topics, isLoading,
        message, isLoadingMessage, refresData, isLoadingPublish,
        isLoadingTopic, cancelSubscription } = props;
    const [open, setOpen] = useState(false);
    const [pass, setPass] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if (isLoading || isLoadingMessage) {
        return <Box sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
        }}>
            <CircularProgress size={100} />
        </Box>
    }
    return <Box>
        <ResponsiveAppBar />
        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 1 }} gutterBottom component="div">
            Temas
            <IconButton color="primary" onClick={() => cancelSubscription()} component="span">
                <DeleteIcon />
            </IconButton>
        </Typography>
        <Grid container sx={{ justifyContent: "center" }} >
            {topics.map((t, key) => (
                <Grid item key={key} sx={{ margin: 1 }}>
                    <Filter name={t?.name} />
                </Grid>
            ))}
        </Grid>

        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 1 }} gutterBottom component="div">
            Tablero de Temas
            <IconButton color="primary" onClick={() => refresData()} component="span">
                <CachedIcon />
            </IconButton>
        </Typography>
        <Grid container sx={{ justifyContent: "center" }} >
            {message.map((t, key) => (
                <Grid item key={key} sx={{ margin: 1 }}>
                    <ResponsiveCard data={t} />
                </Grid>
            ))}
        </Grid>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"CREAR UNA OFERTA DE EMPLEO"}</DialogTitle>
            <DialogContent>
                <ButtonGroup sx={{ width: "100%", }} aria-label="outlined button group">
                    <Button sx={{ width: "100%", }} variant={!pass ? "contained" : "outlined"} onClick={() => setPass(!pass)}>Crear Tema</Button>
                    <Button sx={{ width: "100%", }} variant={!pass ? "outlined" : "contained"} onClick={() => setPass(!pass)}>Crear Anuncio</Button>
                </ButtonGroup>
                {
                    !pass ? <TextField
                        margin="normal"
                        required
                        fullWidth
                        onChange={handleChange("topico")}
                        value={topico}
                        name="topicos"
                        label="Topicos"
                        type="text"
                        id="topicos"
                    />
                        :
                        <>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                onChange={handleChange("topico")}
                                value={topico}
                                name="topicos"
                                label="Topicos"
                                type="text"
                                id="topicos"
                            />
                            <TextField
                                margin="normal"
                                required
                                onChange={handleChange("contenido")}
                                value={contenido}
                                fullWidth
                                name="contenido"
                                label="Contenido"
                                type="text"
                                id="contenido"
                            />
                            <TextField
                                margin="normal"
                                required
                                onChange={handleChange("tema")}
                                value={tema}
                                fullWidth
                                name="tema"
                                label="Tema"
                                type="text"
                                id="tema"
                            />
                        </>
                }

            </DialogContent>
            <DialogActions>
                <Button variant="outlined" disabled={isLoadingPublish || isLoadingTopic} onClick={handleClose}>Cerrar</Button>
                <Button variant="contained" disabled={isLoadingPublish || isLoadingTopic} onClick={() => saveData(pass)}>
                    {isLoadingPublish || isLoadingTopic ?
                        <CircularProgress />
                        :
                        "Crear"
                    }
                </Button>
            </DialogActions>
        </Dialog>

        {user?.role === "ADMIN_ROLE" && (<Fab color="primary"
            sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
            }}
            aria-label="add"
            onClick={handleClickOpen}>
            <AddIcon />
        </Fab>)}

    </Box >
}


export default View;