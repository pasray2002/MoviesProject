const initialState = []

export  const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return action.payload
        default:
            return state
    }
}