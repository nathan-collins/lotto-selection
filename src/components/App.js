import React, { useState } from 'react';
import './App.css';

import NumbersSelection from './NumbersSelection';
import NumbersList from './NumbersList';

import Delete from '@material-ui/icons/DeleteOutlineRounded';
import OfflineBolt from '@material-ui/icons/OfflineBoltRounded';
import { tabcorpConfig } from '../config/tabcorp.js';
import TabcorpHelper from './TabcorpHelper';

/**
 * @return {String} Markup
 */
function App() {
  const defaultPrimaryNumbers = TabcorpHelper.buildArrayFromNumber(
    tabcorpConfig.games[tabcorpConfig.currentGame].primaryNumberTotals
  );

  const defaultSecondaryNumbers = TabcorpHelper.buildArrayFromNumber(
    tabcorpConfig.games[tabcorpConfig.currentGame].secondaryNumberTotals
  );

  const [numbers, setNumbers] = useState(defaultPrimaryNumbers);
  const [specialNumbers, setSpecialNumbers] = useState(defaultSecondaryNumbers);

  /**
   * Retrieve result from the api
   */
  const fetchResults = async () => {
    try {
      await fetch(
        'https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults',
        {
          method: 'POST',
          body: JSON.stringify({
            CompanyId: tabcorpConfig.company,
            MaxDrawCountPerProduct: 1,
            OptionalProductFilter: [tabcorpConfig.currentGame],
          }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const results = data.DrawResults[0];
          console.log(results);
          setNumbers(results.PrimaryNumbers);
          setSpecialNumbers(results.SecondaryNumbers);
        });
    } catch (error) {
      if (error.name !== 'AbortError') {
        // handle error
      }
    }
  };

  /**
   * Empty results to start again
   */
  const removeResults = () => {
    setNumbers(defaultPrimaryNumbers);
    setSpecialNumbers(defaultSecondaryNumbers);
  };

  return (
    <div className="app">
      <header className="App-header"></header>
      <section id="increment">1</section>
      <section id="numbersSelection">
        <NumbersList
          numbers={numbers}
          specialNumbers={specialNumbers}
          specialCharacterLabel="PB"
        />
        <NumbersSelection totalNumbers="35" numbers={numbers} />
        <NumbersSelection
          totalNumbers="20"
          title="Select your Powerball"
          numbers={specialNumbers}
        />
      </section>
      <section id="icons">
        <OfflineBolt onClick={fetchResults} />
        <Delete onClick={removeResults} />
      </section>
    </div>
  );
}

export default App;
