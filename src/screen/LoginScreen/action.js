import { useState } from 'react';

const dataValues = {
    correo: "",
    password: "",
}

const Action = () => {
    const [values, setValues] = useState(dataValues);
    const { correo, password } = values;

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value
        });
    };

    const handleLogin = (pass) =>{
        pass ? console.log("Registrate",correo,password) : console.log("Login",correo,password);
    }
    return {
        correo,
        password,
        handleChange,
        handleLogin
    }
}

export default Action;