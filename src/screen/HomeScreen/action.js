import { useState, useEffect } from 'react';
import { useAuth, useGetTopics, useGetMessage, useCreateTopic, usePublish, useCancel } from "../../hooks"
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
    const { createT, isLoading: isLoadingTopic, error: errorCTopic } = useCreateTopic();
    const { createP, isLoading: isLoadingPublish, error: errorPublish } = usePublish();
    const { cancelS, error: errorCancel } = useCancel();
    const { topico, contenido, tema } = values;

    useEffect(() => {
        if (errorMessage)
            enqueueSnackbar(errorMessage?.response.data.msg, { variant: 'error' });
    }, [errorMessage]);

    useEffect(() => {
        if (errorCTopic)
            enqueueSnackbar(errorCTopic?.response.data.msg, { variant: 'error' });
    }, [errorCTopic]);

    useEffect(() => {
        if (errorPublish)
            enqueueSnackbar(errorPublish?.response.data.msg, { variant: 'error' });
    }, [errorPublish]);

    useEffect(() => {
        if (errorCancel)
            enqueueSnackbar(errorCancel?.response.data.msg, { variant: 'error' });
    }, [errorCancel]);

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value
        });
    };

    const saveData = (pass) => {
        !pass ? createT({ topic: topico }) : createP({
            topic: topico, dataBuffer: {
                tema: tema,
                contenido: contenido,
                topic: topico
            }
        })
    }
    const refresData = () => {
        getMessage({ subscriptionName: user?.name });
    }
    const cancelSubscription = () => {
        cancelS({ subscriptionName: user?.name })
        refresData();
    }
    return {
        topico, contenido, tema, user,
        topics,
        message,
        isLoadingMessage,
        isLoading,
        isLoadingPublish,
        isLoadingTopic,
        handleChange,
        saveData,
        refresData,
        cancelSubscription
    }
}

export default Action;