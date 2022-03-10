import { request } from "../../api";
import { useMutation, useQuery } from 'react-query';
import { atom, useAtom } from "jotai";
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { persistState, getPersistedState } from "../../utils";
import { PERSISTOR_KEYS } from "../../variables";

const userAtom = atom(getPersistedState(PERSISTOR_KEYS.user) ?? {});
const authAtom = atom(getPersistedState(PERSISTOR_KEYS.auth) ?? { isAuthenticated: false });

export const useAuth = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [user, setUser] = useAtom(userAtom);
    const [auth, setAuth] = useAtom(authAtom);
    const navigate = useNavigate();
    useEffect(() => persistState(PERSISTOR_KEYS.auth, auth), [auth]);
    useEffect(() => persistState(PERSISTOR_KEYS.user, user), [user]);

    const logOut = async () => {
        //eslint-disable-next-line
        try {
            setUser({});
            //eslint-disable-next-line
            setAuth({ isAuthenticated: false });
            navigate("/", { replace: true });
            enqueueSnackbar('Cerraste Sesión ', { variant: 'success' });
        } catch (e) {
            enqueueSnackbar('Ucurrio un problema intentando cerrar sesión', { variant: 'error' });
        }



    };
    return {
        user, setUser, auth, setAuth, logOut
    };
};

export const useLogin = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { setAuth, setUser } = useAuth();
    const navigate = useNavigate();

    const {
        mutate: signIn,
        isLoading,
        error,
    } = useMutation(
        (payload) => request.user.signIn(payload),
        {
            onSuccess: data => {
                if (data.user) {
                    console.log(data)
                    setUser(data.user);
                    setAuth({ isAuthenticated: true });
                    navigate("/home", { replace: true })
                    enqueueSnackbar('Bienvenido', { variant: 'success' });
                }
            }
        }
    );

    return {
        isLoadingSigningIn: isLoading,
        errorSigningIn: error,
        signIn,
    };
};

export const useRegister = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { setUser, setAuth } = useAuth();
    const navigate = useNavigate();

    const {
        mutate: signUp,
        isLoading,
        error
    } = useMutation(
        (payload) => request.user.signUp(payload),
        {
            onSuccess: data => {
                if (data) {
                    setUser(data);
                    setAuth({ isAuthenticated: true });
                    navigate("/home", { replace: true })
                    enqueueSnackbar('Usuario Creado Satisfactoriamente', { variant: 'success' });
                }
            },
        }
    );

    return {
        isLoading,
        error,
        signUp,
    };
};

