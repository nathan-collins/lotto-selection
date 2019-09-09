import React from 'react';
import './NumbersSelection.css';

import PropTypes from 'prop-types';
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
  const NumberSquares = () => {
    if (!totalNumbers) return '';
    return TabcorpHelper.buildArrayFromNumber(totalNumbers).map((number, index) => {
      const exists = numbers.includes(index + 1);
      return <NumberContainer key={index} type="square" number={index + 1} exists={exists} />;
    });
  };

  /**
   * @return {String} Show nothing or display the full html
   */
  const showTitle = () => {
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

/**
 */
NumbersSelection.propTypes = {
  name: PropTypes.string,
  totalNumbers: PropTypes.number,
  title: PropTypes.string,
  numbers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])),
};

NumbersSelection.defaultProps = {
  name: '',
  totalNumbers: 35,
  title: '',
  numbers: [],
};

export default NumbersSelection;
