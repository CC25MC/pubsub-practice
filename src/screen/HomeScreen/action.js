import { useState } from 'react';

const dataValues = {
    topico: "",
    contenido: "",
    tema: "",
}

const Action = () => {
    const [values, setValues] = useState(dataValues);
    const { topico, contenido, tema } = values;

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value
        });
    };

    const saveData = () => {
        console.log(topico, contenido, tema);
    }
    return {
        topico, contenido, tema,
        handleChange,
        saveData
    }
}

export default Action;