import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldState = getState().ctr.counter;
            console.log(oldState);
            dispatch(saveResult(res));
        }, 2000);
    }

}

export const deleteResult = (resElid) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElid
    };
};