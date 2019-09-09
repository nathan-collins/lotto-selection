import React, { useState } from 'react';
import './App.css';

import Delete from '@material-ui/icons/DeleteOutlineRounded';
import OfflineBolt from '@material-ui/icons/OfflineBoltRounded';
import NumbersSelection from './NumbersSelection';
import NumbersList from './NumbersList';

import { tabcorpConfig } from '../config/tabcorp.js';
import TabcorpHelper from './TabcorpHelper';

/**
 * @return {String} Markup
 */
function App() {
  const configPath = tabcorpConfig.games[tabcorpConfig.currentGame];

  const defaultPrimaryNumbers = TabcorpHelper.buildArrayFromNumber(configPath.primaryNumberTotals);
  const defaultSecondaryNumbers = TabcorpHelper.buildArrayFromNumber(
    configPath.secondaryNumberTotals
  );
  const currentGameLabel = configPath.secondaryCharacterLabel;
  const { totalPrimaryNumbers } = configPath;
  const { totalSecondaryNumbers } = configPath;
  const { titleText } = configPath;

  const [primaryNumbers, setPrimaryNumbers] = useState(defaultPrimaryNumbers);
  const [secondaryNumbers, setSecondaryNumbers] = useState(defaultSecondaryNumbers);

  /**
   * Retrieve result from the api
   */
  const fetchResults = async () => {
    try {
      await fetch('https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults', {
        method: 'POST',
        body: JSON.stringify({
          CompanyId: tabcorpConfig.company,
          MaxDrawCountPerProduct: 1,
          OptionalProductFilter: [tabcorpConfig.currentGame],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          const results = data.DrawResults[0];
          setPrimaryNumbers(results.PrimaryNumbers);
          setSecondaryNumbers(results.SecondaryNumbers);
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
    setPrimaryNumbers(defaultPrimaryNumbers);
    setSecondaryNumbers(defaultSecondaryNumbers);
  };

  /**
   * @return {String} Markup value for <App />
   */
  return (
    <div className="app">
      <section id="increment">1</section>
      <section id="numbersSelection">
        <NumbersList
          primaryNumbers={primaryNumbers}
          secondaryNumbers={secondaryNumbers}
          secondaryCharacterLabel={currentGameLabel}
        />
        <NumbersSelection
          name="primary"
          totalNumbers={totalPrimaryNumbers}
          numbers={primaryNumbers}
        />
        <NumbersSelection
          name="secondary"
          totalNumbers={totalSecondaryNumbers}
          title={titleText}
          numbers={secondaryNumbers}
        />
      </section>
      <section id="icons">
        <OfflineBolt className="scale-icon offline-icon" onClick={fetchResults} />
        <Delete className="scale-icon delete-icon" onClick={removeResults} />
      </section>
    </div>
  );
}

export default App;
