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

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const View = (props) => {
    const { topico, contenido, tema, saveData, handleChange } = props;
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return <Box>
        <ResponsiveAppBar />
        <Box sx={{ display: "flex", width: "auto", paddingLeft: "20px", paddingRight: "20px" }}>
            <Filter />
        </Box>
        <Box sx={{ width: "auto", paddingLeft: "20px", paddingRight: "20px" }}>
            <ResponsiveCard />
        </Box>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"CREAR UNA OFERTA DE EMPLEO"}</DialogTitle>
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={handleClose}>Cerrar</Button>
                <Button variant="contained" onClick={saveData}>Crear</Button>
            </DialogActions>
        </Dialog>


        <Fab color="primary"
            sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
            }}
            aria-label="add"
            onClick={handleClickOpen}>
            <AddIcon />
        </Fab>
    </Box >
}


export default View;