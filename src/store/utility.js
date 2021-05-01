export const updatedObject = (oldState, updatedValues) => {
    return {
        ...oldState,
        ...updatedValues
    }
}