import "./App.css";
import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'react-dates/initialize';
import NavBar from "./components/navbar/NavBarContainer";
import ModalContainer from "./components/modals/ModalContainer";
import { TournamentList, AdvertList, NewAdvertPage} from './components/views';
import { authenticationChecck } from "./actions/user";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

store.dispatch(authenticationChecck());

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={AdvertList} />
          <Route exact path="/tournament-list" component={TournamentList} />
          <Route exact path="/advert-list" component={AdvertList} />
          <Route exact path="/new-advert" component={NewAdvertPage} />
        </Switch>
        <ModalContainer />
      </BrowserRouter>
    </Provider>
  );
}
