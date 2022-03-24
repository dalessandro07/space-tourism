import { createContext, useState } from 'react';

export const contexto = createContext();

const { Provider } = contexto;

const TravelContext = ({ lang, children }) => {
    const [travel, setTravel] = useState([]);

    const addDestination = (destino) => {
        setTravel([{ ...travel, destino }]);
    };

    return <Provider value={{ travel, addDestination, lang }}>{children}</Provider>;
};

export default TravelContext;
