import React from 'react';

export interface Profile {
    id: string,
    username: string,
}

export const defaultProfile: Profile = {
    id: '0',
    username: 'player'
}

interface AppContext {
    initContext: () => void,
    profile: Profile,
    updateProfile: (updatedProfile: Profile) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => {},
    profile: defaultProfile,
    updateProfile: () => { }
})

export default AppContext