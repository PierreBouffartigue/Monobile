import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';

import { list, personCircleOutline, trophyOutline } from 'ionicons/icons'
import Home from '../pages/Home';
import Profile from '../pages/Profiles';
import GameProfiles from '../pages/GameProfiles';
import Plate from '../pages/Plate';
import Game from '../pages/Game';
import { ROUTE_HOME, ROUTE_TABS_BASE, ROUTE_PROFILE, ROUTE_PLATE, ROUTE_GAMEPROFILES, ROUTE_GAME } from './Routes';

const Tabs: React.FC = () => (
    <IonTabs >
        <IonRouterOutlet>
            <Route path={ROUTE_HOME} component={Home} exact />
            <Route path={ROUTE_GAME} component={Game} exact />
            <Route path={ROUTE_PLATE} component={Plate} exact />
            <Route path={ROUTE_GAMEPROFILES} component={GameProfiles} exact />
            <Route path={ROUTE_PROFILE} component={Profile} exact />
            <Redirect path={ROUTE_TABS_BASE} exact to={ROUTE_HOME} />
        </IonRouterOutlet>
        <IonTabBar id="tabBar" slot="bottom" style={{visibility:"hidden"}}>
            <IonTabButton tab="Plate" href={ROUTE_PLATE}>
            <IonIcon icon={list} />
                <IonLabel>Plate</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Profiles" href={ROUTE_GAMEPROFILES}>
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Profile</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
);

export default Tabs;
