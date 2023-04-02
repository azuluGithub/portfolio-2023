import { cloneElement, PureComponent, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loader from '../Loader';
import HomePage from '../../route/HomePage';

import { MAIN_ELEMENTS } from './Router.config';

class RouterComponent extends PureComponent {

  [MAIN_ELEMENTS] = [
    { component: <Route exact path="/" component={HomePage} key='home'/> },
  ];

  renderElements(ELEMENTS) {
    return this[ELEMENTS].map(({ component }) => cloneElement(component));
  }

  renderLoader() {
    return <Loader />;
  }

  renderMainElements() {
    return (
      <Suspense fallback={this.renderLoader()}>
        <Switch>
          { this.renderElements(MAIN_ELEMENTS) }
        </Switch>
      </Suspense>
    );
  }

  renderRouter() {
    return (
      <BrowserRouter>
        { this.renderMainElements() }
      </BrowserRouter>
    );
  }

  render() {
    return this.renderRouter();
  }
}

export default RouterComponent;
