import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Marvel from '../containers/Marvel';
import GifExperts from '../containers/GifExperts';
import Layout from '../components/plugins/Layout';


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Marvel} />
        <Route exact path="/Gifs" component={GifExperts} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
