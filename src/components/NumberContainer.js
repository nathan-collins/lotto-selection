import React from 'react';
import './NumberContainer.css';
import PropTypes from 'prop-types';

/**
 *
 * @param {String} type Circle or square number container?
 * @param {Number} number The number to display in the container
 * @param {Boolean} secondaryCharacter Is it a secondary character?
 * @param {Boolean} exists Does the number exist in the results list?
 * @param {String} secondaryCharacterLabel Secondary character default display
 */
const NumberContainer = ({ type, number, secondaryCharacter, exists, secondaryCharacterLabel }) => {
  return (
    <div
      className={
        type +
        (secondaryCharacter ? ' secondary' : '') +
        (exists ? ' selected' : '') +
        (!number && secondaryCharacter ? ' no-background' : '')
      }
    >
      {!number && secondaryCharacter ? secondaryCharacterLabel : number}
    </div>
  );
};

/**
 */
NumberContainer.propTypes = {
  type: PropTypes.string.isRequired,
  number: PropTypes.number,
  secondaryCharacter: PropTypes.bool,
  exists: PropTypes.bool,
  secondaryCharacterLabel: PropTypes.string,
};

NumberContainer.defaultProps = {
  number: 0,
  secondaryCharacter: false,
  exists: false,
  secondaryCharacterLabel: '',
};

export default NumberContainer;
