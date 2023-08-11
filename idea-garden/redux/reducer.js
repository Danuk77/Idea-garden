// Initial state values stored by the store
initialState = {
    userToken: null,
    username: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case 'LOG-IN':
            // Update the user token for authentication purposes
            return{
                ...state,
                userToken: action.payload.userToken,
                username: action.payload.username
            }
        case 'LOG-OUT':
            // Log the user out of the app
            return{
                ...state,
                userToken: null,
                username: null
            }
        default:
            return state;
    }
}