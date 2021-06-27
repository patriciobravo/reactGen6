import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Marvel from '../containers/Marvel';
import Favorites from '../containers/Favorites';
import GifExperts from '../containers/GifExperts';
import Layout from '../components/plugins/Layout';


const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Marvel} />
        <Route exact path="/Favorites" component={Favorites} />
        <Route exact path="/GifsExpert" component={GifExperts} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
