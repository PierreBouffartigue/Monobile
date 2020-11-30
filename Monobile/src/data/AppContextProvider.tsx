import React, { useState, useEffect, useCallback } from 'react';
import AppContext, { Profile, defaultProfile } from './app-context';

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

const AppContextProvider: React.FC = (props) => {
    const [profile, setProfile] = useState<Profile>(defaultProfile)

    useEffect(()=> {
        console.log('try create state')
        Storage.set({key: 'profile', value: JSON.stringify(profile)})
        console.log('state created')
    }, [profile])

    const updateProfile = (updateProfile: Profile) => {
        setProfile(updateProfile)
    }

    const win = (newWin: Profile) => {
        setProfile(newWin)
    }

    const lose = (newLose: Profile) => {
        setProfile(newLose)
    }

    const initContext = async () => {
        const profileData = await Storage.get({key: 'profile'})
        const storedProfile = profileData.value? JSON.parse(profileData.value): defaultProfile
        setProfile(storedProfile)
    }

    return <AppContext.Provider value={{ initContext, profile, updateProfile, win, lose}}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider