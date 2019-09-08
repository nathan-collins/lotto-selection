import React from 'react';
import './NumberContainer.css';

/**
 *
 * @param {String} type Circle or square number container?
 * @param {Number} number The number to display in the container
 * @param {Boolean} specialCharacter Is it a special character?
 * @param {Boolean} exists Does the number exist in the results list?
 * @param {String} specialCharacterLabel Special character default display
 */
const NumberContainer = ({
  type,
  number,
  specialCharacter,
  exists,
  specialCharacterLabel,
}) => {
  console.log(number);
  return (
    <div
      className={
        type +
        ' ' +
        (specialCharacter ? 'special' : '') +
        ' ' +
        (exists ? 'selected' : '') +
        ' ' +
        (!number && specialCharacter ? 'no-background' : '')
      }
    >
      {!number && specialCharacter ? specialCharacterLabel : number}
    </div>
  );
};

export default NumberContainer;
