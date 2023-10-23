export const addNewAlbum = (album) => {
  return (dispatch) => {
    dispatch({
      type: 'addNewAlbum',
      payload: album,
    })
  } 
}
export const editAlbum = (name, updatedAlbum) => {
  return (dispatch) => {
    dispatch({
      type: 'editAlbum',
      payload: {name, updatedAlbum},
    })
  } 
}
export const deleteAlbum = (album) => {
  return (dispatch) => {
    dispatch({
      type: 'deleteAlbum',
      payload: album,
    })
  } 
}
