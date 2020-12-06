import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Plate } from "./pages/Plate";
import { PlayerTest } from "./pages/PlayerTest";
import { CaseSpe } from "./pages/CaseSpe";
import Profiles from './pages/Profiles';
import AppContext from './data/app-context';
import {Game} from "./pages/Game";

import { ROUTE_HOME, ROUTE_TABS_BASE, ROUTE_PROFILE } from './nav/Routes';
import Tabs from './nav/Tabs';

const App: React.FC = () => {
  
  const appCtx = useContext(AppContext)

  useEffect(() => {
    appCtx.initContext();
  }, [])

  
  return(
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={ROUTE_TABS_BASE} component={Tabs} />
        <Redirect path="/" exact to={ROUTE_HOME} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);}

export default App;
