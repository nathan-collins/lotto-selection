By completing this test, you acknowledge:

- This test is voluntary and performed in your own time and at your own expense.
- The test is not applicable to any current project at Tabcorp and is solely for the purpose of testing your skill
  for the position of Software Engineer during the recruitment process.
- Tabcorp derives no benefit from the task performed other than the assessment of your suitability for the
  position of Software Engineer for which you have applied.

Tabcorp is committed to creating an inclusive workplace where all our people feel valued for their unique qualities and have a sense of belonging. If you need assistance or adjustments to fully participate in the application process, including this test, please contact your agency.

**Brief**:
Using a frontend framework (e.g. React ideally, Vue, Angular) of your choice create a mobile-friendly web page which allows auto-filling ticket numbers based on results of last Powerball draw.

**Details**:
The results for last Powerball draw can be viewed on https://thelott.com/powerball/results
Or retrieved from data API:

> POST https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults

```javascript
{"CompanyId": "GoldenCasket", "MaxDrawCountPerProduct":1, "OptionalProductFilter": ["Powerball"]}
```

## Constraints and recommendations:

The form does not need to be submitted, we’re only after the function of “click a button -&gt; make request to the API -
&gt; fill out the form”.
The form layout should resemble example above.
Use a “framework-relevant” way of requesting data from API and interacting with DOM.
JQuery should not be used.
The code should be uploaded to a public github or gitlab account so that it can be reviewed -&gt; Please share the URL
address for your uploaded project.
The page should not be hosted.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
