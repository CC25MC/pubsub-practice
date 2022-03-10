import { useMutation, useQuery } from 'react-query';
import { useSnackbar } from 'notistack';
import { request } from "../../api";

export const useGetTopics = () => {
    const { isLoading, data, error } = useQuery(
        "/api/pubsub",
        () => request.pubsub.getTopic(),
        {
            refetchInterval: 60000
        }
    );
    return {
        isLoading,
        data: data?.topics || [],
        error,
    };
}

export const useGetMessage = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutate: getMessage,
        isLoading,
        error,
        data
    } = useMutation(
        (payload) => request.pubsub.message(payload),
        {
            onSuccess: data => {
                if (data.data) {
                    enqueueSnackbar("Refrescado exitoso", { variant: 'success' });
                }
            }
        }
    );
    return {
        isLoading,
        data: data?.data || [],
        getMessage,
        error,
    };
}

export const useCancel = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutate: cancelS,
        isLoading,
        error,
    } = useMutation(
        (payload) => request.pubsub.cancel(payload),
        {
            onSuccess: data => {
                if (data.msg) {
                    enqueueSnackbar("Eliminacion exitosa", { variant: 'success' });
                }
            }
        }
    );
    return {
        isLoading,
        cancelS,
        error,
    };
}


export const useCreateTopic = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutate: createT,
        isLoading,
        error,
    } = useMutation(
        (payload) => request.pubsub.topic(payload),
        {
            onSuccess: data => {
                if (data.msg) {
                    enqueueSnackbar(data.msg, { variant: 'success' });
                }
            }
        }
    );
    return {
        isLoading,
        createT,
        error,
    };
}

export const usePublish = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutate: createP,
        isLoading,
        error,
    } = useMutation(
        (payload) => request.pubsub.publish(payload),
        {
            onSuccess: data => {
                if (data.msg) {
                    enqueueSnackbar(data.msg, { variant: 'success' });
                }
            }
        }
    );
    return {
        isLoading,
        createP,
        error,
    };
}

export const useSubscribe = () => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutate: createS,
        isLoading,
        error,
    } = useMutation(
        (payload) => request.pubsub.subscribe(payload),
        {
            onSuccess: data => {
                if (data.msg) {
                    enqueueSnackbar(data.msg, { variant: 'success' });
                }
            }
        }
    );
    return {
        isLoading,
        createS,
        error,
    };
}
