import PropTypes from 'prop-types';

export const Tituloh1 = ({ valueUm }) => {
    return <h1 className="">{valueUm}</h1>;
}

Tituloh1.propTypes = {
    valueUm: PropTypes.string.isRequired,  // Espera-se que seja uma string obrigatória
}

export const Tituloh2 = ({ valueDois }) => {
    return <h2 className="">{valueDois}</h2>;
}

Tituloh2.propTypes = {
    valueDois: PropTypes.string.isRequired,  // Espera-se que seja uma string obrigatória
}

export const Tituloh3 = ({ valueTres }) => {
    return <h3 className="">{valueTres}</h3>;
}

Tituloh3.propTypes = {
    valueTres: PropTypes.string.isRequired,  // Espera-se que seja uma string obrigatória
}

export const Tituloh4 = ({ valueQuatro }) => {
    return <h4 className="">{valueQuatro}</h4>;
}

Tituloh4.propTypes = {
    valueQuatro: PropTypes.string.isRequired,   // Espera-se que seja uma string obrigatória
}

export const Paragrafo = ({ paragrafo }) => {
    return <p>{paragrafo}</p>;
}

Paragrafo.propTypes = {
    paragrafo: PropTypes.string.isRequired,  // Espera-se que seja uma string obrigatória
}
