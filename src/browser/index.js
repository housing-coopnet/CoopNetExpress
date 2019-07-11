// This is the index for the client side handling
import React from 'react'
import { render } from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'
import getFacts from '../shared/components/testFacts';

getFacts().then(facts => {
  console.log("Browser's trna render")
  render(
    <BrowserRouter>
      <App facts={facts}/>
    </BrowserRouter>,
    document.getElementById('app')
  );
})