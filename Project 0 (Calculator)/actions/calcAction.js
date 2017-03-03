
const ADDITION = {
    type: 'ADDITION'
}

const SUBTRACTION = {
    type: 'SUBTRACTION'
}

const DIVIDE = {
    type: 'DIVIDE'
}

const MULTIPLICATION = {
    type: 'MULTIPLICATION'
}

export function passStateToComp(state){
    return {
        value: state.screen
    }
}

export function sentActionToStore(dispatch){
    return {
        onAdd: ()=> dispatch(ADDITION),
        onSub: ()=> dispatch(SUBTRACTION),
        onDiv: ()=> dispatch(DIVIDE),
        onMulti: ()=> dispatch(MULTIPLICATION)
    }
}