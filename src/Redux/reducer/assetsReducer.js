const INITIAL_STATE = {
  assets: [],
  isFetching: false,
}

const assetsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'REQUEST_API':
    return {
      ...state,
      isFetching: true,
    }
  case 'REQUEST_API_SUCCESS':
    return {
      ...state,
      isFetching: false,
      assets: [...action.assets]
    }
  default:
    return state
  }
}

export default assetsReducer;
