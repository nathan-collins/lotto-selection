import React, { useEffect, useState } from 'react';
import './NumbersList.css';

import NumberContainer from './NumberContainer';
import TabcorpHelper from './TabcorpHelper';

/**
 *
 * @param {Array} numbers All numbers to display inside results
 * @param {Array} specialNumbers All special numbers to display at the end of the results
 * @return {String} <NumberContainer />
 */
const NumbersList = ({ numbers, specialNumbers, specialCharacterLabel }) => {
  const [specialCharacters, setSpecialCharacters] = useState([]);

  /**
   */
  useEffect(() => {
    setSpecialCharacters(
      numbers.slice(Math.max(numbers.length - specialCharacters.length, 1))
    );
  }, [numbers, specialCharacters.length]);

  /**
   * Process all values and output results
   * @return {String} <NumberContainer />
   */
  const NumberCircles = () => {
    if (numbers.length === 0) return;
    const allNumbers = [...numbers, ...specialNumbers];

    let specialCharacter = false;

    return allNumbers.map((number, index) => {
      if (specialNumbers.includes(number)) {
        specialCharacter = true;
      }

      return (
        <NumberContainer
          key={index}
          type="circle"
          number={number}
          specialCharacter={specialCharacter}
          specialCharacterLabel={specialCharacterLabel}
        />
      );
    });
  };

  return <div className="numbers">{NumberCircles(numbers)}</div>;
};

export default NumbersList;
