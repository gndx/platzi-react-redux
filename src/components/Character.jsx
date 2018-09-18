import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
    <div>
        <figure>
            <img src={image} alt={name} />
        </figure>
        <h2>{name}</h2>
    </div>
);

Character.propTypes = {
   name: PropTypes.string,
   image: PropTypes.string,
}

export default Character;