import chartData from './data';
export const FETCH_DATA = "fetch_data"

export function createAction(type,data){
    return {
        type,
        data
    }
}

export function fetchTotalSavings(){
    return (dispatch, getState) => {        
        return setTimeout(()=> {
            const payload = {
                chartData,
                loading: false
            }
            dispatch(createAction(FETCH_DATA, payload))
        }, 2000)
    }
}