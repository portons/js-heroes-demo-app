import 'normalize.css/normalize.css';
import 'core/assets/stylesheets/main.scss';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Link, browserHistory } from 'react-router';
import store from 'core/store/store';

import Recipes from 'web/components/recipes';
import AddRecipe from 'web/components/add-recipe';
import { fetchRecipes } from 'core/actions/recipes';

const App = ({ children }) => (
  <div>
    <h1>Recipes app:</h1>
    { children }
  </div>
);

const NotFound = () => (
  <div>
    <h1>You are lost?</h1>
    <Link to="/">Back home</Link>
  </div>
);

store.dispatch(fetchRecipes());

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route components={ App }>
        <Route path="/" component={ Recipes } />
        <Route path="/add" component={ AddRecipe } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>
  </Provider>,
  document.getElementById('app')
);
