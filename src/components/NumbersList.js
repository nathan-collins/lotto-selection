import React, { useEffect, useState } from 'react';
import './NumbersList.css';

import PropTypes from 'prop-types';
import NumberContainer from './NumberContainer';
import TabcorpHelper from './TabcorpHelper';

/**
 *
 * @param {Array} primaryNumbers All numbers to display inside results
 * @param {Array} secondaryNumbers All secondary numbers to display at the end of the results
 * @return {String} <NumberContainer />
 */
const NumbersList = ({ primaryNumbers, secondaryNumbers, secondaryCharacterLabel }) => {
  const [secondaryCharacters, setSecondaryCharacters] = useState([]);

  /**
   */
  useEffect(() => {
    setSecondaryCharacters(
      primaryNumbers.slice(Math.max(primaryNumbers.length - secondaryCharacters.length, 1))
    );
  }, [primaryNumbers, secondaryCharacters.length]);

  /**
   * Process all values and output results
   * @return {String} <NumberContainer />
   */
  const NumberCircles = () => {
    if (primaryNumbers.length === 0) return '';
    const allNumbers = [...primaryNumbers, ...secondaryNumbers];

    let secondaryCharacter = false;

    // Need to tidy this up a bit
    const secondaryNumbersPositions = TabcorpHelper.buildArrayFromStartingNumber(
      allNumbers.length - secondaryNumbers.length + 1,
      allNumbers.length,
      1
    );

    return allNumbers.map((number, index) => {
      if (!number) {
        // Tests should tidy this up a bit
        if (secondaryNumbersPositions.includes(index + 1)) {
          secondaryCharacter = true;
        }
      } else if (secondaryNumbers.includes(number)) {
        secondaryCharacter = true;
      }

      return (
        <NumberContainer
          key={!number ? index : number}
          type="circle"
          number={number}
          secondaryCharacter={secondaryCharacter}
          secondaryCharacterLabel={secondaryCharacterLabel}
        />
      );
    });
  };

  return <div className="numbers">{NumberCircles(primaryNumbers)}</div>;
};

/**
 */
NumbersList.propTypes = {
  primaryNumbers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  secondaryNumbers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  secondaryCharacterLabel: PropTypes.string,
};

NumbersList.defaultProps = {
  secondaryCharacterLabel: '',
};

export default NumbersList;
