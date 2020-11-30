import React from 'react';

export interface Profile {
    id: string,
    username: string,
    win: number,
    game: number
}

export const defaultProfile: Profile = {
    id: '0',
    username: 'player',
    win: 0,
    game: 0
}

interface AppContext {
    initContext: () => void,
    profile: Profile,
    updateProfile: (updatedProfile: Profile) => void
    win: (newWin: Profile) => void
    lose: (newLose: Profile) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => {},
    profile: defaultProfile,
    updateProfile: () => { },
    win: () => { },
    lose: () => { }
})

export default AppContext