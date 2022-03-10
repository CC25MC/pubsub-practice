import { useState, useEffect } from 'react';
import { useAuth, useGetTopics, useGetMessage } from "../../hooks"
import { useSnackbar } from 'notistack';

const dataValues = {
    topico: "",
    contenido: "",
    tema: "",
}

const Action = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [values, setValues] = useState(dataValues);
    const { user } = useAuth();
    const { data: topics, isLoading } = useGetTopics();
    const { data: message, isLoading: isLoadingMessage, getMessage, error: errorMessage } = useGetMessage();
    const { topico, contenido, tema } = values;

    useEffect(() => {
        if (errorMessage)
            enqueueSnackbar(errorMessage?.response.data.msg, { variant: 'error' });
    }, [errorMessage]);

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value
        });
    };

    const saveData = () => {
    }
    const refresData = () => {
        getMessage({ subscriptionName: user?.name });
    }
    return {
        topico, contenido, tema, user,
        topics,
        message,
        isLoadingMessage,
        isLoading,
        handleChange,
        saveData,
        refresData
    }
}

export default Action;