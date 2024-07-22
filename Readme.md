# REDUX

 - Managing App-Wide State with Redux
 - What Is Redux? And Why Would You Use It?
 - Redux Basics & Using Redux with React
 - Working with Redux Toolkit

 what is redux ? 

    - A state management system for cross-component or app-wide state
    - it help us manage the state

#### State
Data which, when changed, should affect the UI

Def of state :

    - local state => state belongs to a single component

    - Cross-component state => state belongs to mulitiple components eg: profile pic changes should reflect in the header compoent also
        

    - App-wide state => state affecting the entire app eg: user authentication status or chosen theme

## Diff between redux and react context api

 #### potential problem of Context API
    - if we use different context provider it will lead to deeply nested jsx code

    Eg: return (
    <AuthContextProvider>
        <ThemeContextProvider>
            <UIInteractionContextProvider>
                <MultiStepFormContextProvider>
                    <UserRegistration />
                </MultiStepFormContextProvider>
            </UIInteractionContextProvider>
        </ThemeContextProvider>
    </AuthContextProvider>
    );

    - if we use a single context for this app it leads to a single large context provider


    - Performance

## How Redux Works

    - redux having a central Data (state) store

    - we subscribe the store from the component so that the data changes the comp get notified and update the ui

    -  the component never update the data in the store directly. 

    -  to mutate the data in the store we us reducer function .  reducer are not useReducer Hook

    -  comp dispatch an action to the reducer function .











