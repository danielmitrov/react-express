import React from 'react';
import PropTypes from 'prop-types';

import ButtonWrapper from './styles';


function Button({ children, onClick }) {
    return (
        <ButtonWrapper onClick={onClick}>
            {children}
        </ButtonWrapper>
    );
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: () => {},
};


export default Button;
