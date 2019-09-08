import React from 'react';
import './NumbersSelection.css';

import NumberContainer from './NumberContainer';
import TabcorpHelper from './TabcorpHelper';

/**
 *
 * @param {Number} totalNumbers Total amount of boxes to display
 * @param {String||undefined} title Text to display in header, if empty display nothing
 * @param {Array} numbers All values to highlight as existing
 * @return {String} <NumberContainer />
 */
const NumbersSelection = ({ name, totalNumbers, title, numbers }) => {
  /**
   * @param {Number} totalNumbers Total amount of numbers to display in the box
   */
  const NumberSquares = (totalNumbers) => {
    if (!totalNumbers) return;
    return TabcorpHelper.buildArrayFromNumber(totalNumbers).map(
      (number, index) => {
        const exists = numbers.includes(index + 1);
        return (
          <NumberContainer
            key={index}
            type="square"
            number={index + 1}
            exists={exists}
          />
        );
      }
    );
  };

  /**
   * @param {String} title Title to display
   * @return {String} Show nothing or display the full html
   */
  const showTitle = (title) => {
    if (!title) return '';
    return <div className="title">{title}</div>;
  };

  return (
    <div>
      {showTitle(title)}
      <div id={name} className="incremental">
        {NumberSquares(totalNumbers)}
      </div>
    </div>
  );
};

export default NumbersSelection;
