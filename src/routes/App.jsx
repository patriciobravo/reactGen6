import React, { Suspense, lazy } from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import Marvel from '../containers/Marvel';
//import Favorites from '../containers/Favorites';
import GifExperts from '../containers/GifExperts';
import Layout from '../components/plugins/Layout';
import Loader from '../components/plugins/Loader';
import NotFoundPage from '../containers/404-page'
const Favorites = lazy(() => import("../containers/Favorites"));
//const Favorites = lazy(() => import("../containers/Favorites"));


const App = () => (
  <BrowserRouter>
    <Layout>
    <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
      <Switch>
      
          <Route exact path="/" component={Marvel} />
          <Route exact path="/Favorites" component={Favorites} />
          <Route exact path="/GifsExpert" component={GifExperts} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect  exact={true} from="*" to="/404" />      

      </Switch>
      </Suspense>
    </Layout>
  </BrowserRouter>
)

export default App;
