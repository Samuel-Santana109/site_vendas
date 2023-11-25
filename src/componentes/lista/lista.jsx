import PropTypes from 'prop-types';
import '../lista/lista.scss';

export const Lista = ({ itensUm, itensDois, itensTres, itensQuatro }) => {
    return (
        <ul className="Lista">
            <li>{itensUm}</li>
            <li>{itensDois}</li>
            <li>{itensTres}</li>
            <li>{itensQuatro}</li>
        </ul>
    )
}

// Validando propriedades do componente Lista
Lista.propTypes = {
    itensUm: PropTypes.string.isRequired, // Espera-se que itensUm seja uma string obrigatória
    itensDois: PropTypes.string.isRequired, // Espera-se que itensDois seja uma string obrigatória
    itensTres: PropTypes.string.isRequired, // Espera-se que itensTres seja uma string obrigatória
    itensQuatro: PropTypes.string.isRequired, // Espera-se que itensQuatro seja uma string obrigatória
}
