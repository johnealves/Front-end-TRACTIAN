import assetsAPI from '../../services/fakeAPI';

export const requestApi = () => ({
  type: 'REQUEST_API',
})

export const requestApiSuccess = (assets) => ({
  type: 'REQUEST_API_SUCCESS',
  assets,
})

export const assetsThunk = () => {
  return (dispatch) => {
    dispatch(requestApi())
    return assetsAPI().then(resp => dispatch(requestApiSuccess(resp)));
  }
}
