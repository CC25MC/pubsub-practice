import { useState, useEffect } from 'react';
import { useLogin, useRegister } from "../../hooks"
import { useSnackbar } from 'notistack';

const dataValues = {
    correo: "",
    password: "",
    name:""
}

const Action = () => {
    const { errorSigningIn, isLoadingSigningIn, signIn } = useLogin();
    const { isLoading, error, signUp } = useRegister();
    const [values, setValues] = useState(dataValues);
    const { correo, password, name } = values;
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error?.response.data.msg, { variant: 'error' });
        }
    }, [error]);

    useEffect(() => {
        if (errorSigningIn) {
            enqueueSnackbar(errorSigningIn?.response.data.msg, { variant: 'error' });
        }
    }, [errorSigningIn]);

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value
        });
    };

    const handleLogin = (pass) => {
        pass ? signUp({ email: correo, password: password, role: "USER_ROLE", name: name }) : signIn({ email: correo, password: password });
    }
    return {
        correo,
        name,
        password,
        handleChange,
        handleLogin,
        isLoadingSigningIn,
        isLoading
    }
}

export default Action;