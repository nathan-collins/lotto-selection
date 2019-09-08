import React from 'react';
import './NumberContainer.css';

/**
 *
 * @param {String} type Circle or square number container?
 * @param {Number} number The number to display in the container
 * @param {Boolean} secondaryCharacter Is it a secondary character?
 * @param {Boolean} exists Does the number exist in the results list?
 * @param {String} secondaryCharacterLabel Secondary character default display
 */
const NumberContainer = ({
  type,
  number,
  secondaryCharacter,
  exists,
  secondaryCharacterLabel,
}) => {
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

export default NumberContainer;
