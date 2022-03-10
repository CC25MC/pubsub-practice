import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSubscribe, useAuth } from '../../hooks';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router";

export const ResponsiveCard = ({ data }) => {
    return <Card sx={{ width: 350, height: 200 }}>
        <Box sx={{
            width: "100%", height: "80px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center", backgroundColor: "#F96666"
        }}>
            <Typography variant="h5" color="secondary" gutterBottom component="div">
                {data?.topic}
            </Typography>
        </Box>
        <Box sx={{ width: "100%", paddingLeft: "10px", paddingRight: "10px" }}>
            <Typography variant="h6" gutterBottom component="div">
                {data?.tema}
            </Typography>
            <Typography variant="p" gutterBottom component="div">
                {data?.contenido}
            </Typography>
        </Box>
    </Card>
}

export const Filter = ({ name }) => {
    const { createS, isLoading } = useSubscribe();
    const { user } = useAuth();
    const navigate = useNavigate();

    return <Card sx={{
        width: 150,
        height: 50,
        backgroundColor: "#cbcbcb",
        ":hover": {
            boxShadow: 6,
        },
    }}
        onClick={() => {
            if (user?.name) {
                createS({ topic: name, subscriptionName: user?.name })
            } else {
                navigate("/login", { replace: true })
            }
        }}
    >
        <Box sx={{
            width: "100%", height: "100%",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
        }}>
            {
                isLoading ? <CircularProgress /> :
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
            }

        </Box>
    </Card>
}