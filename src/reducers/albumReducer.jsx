import firstAlbum from '../img/1.jpg'
import secondAlbum from '../img/2.jpg'
import thirdAlbum from '../img/3.jpg'

const initialState = {
  albums: [
    {name: 'Fantasy', cover: firstAlbum, year: '1989'},
    {name: 'The Dolphin and the Mermaid', cover: secondAlbum, year: '1994'},
    {name: "Let's Toast to Love", cover: thirdAlbum, year: '1997'}
  ]
}

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'addNewAlbum':
      return {
        ...state,
        albums: [...state.albums, action.payload],
      };
    case 'editAlbum':
      const {name, updatedAlbum} = action.payload
      return {
        ...state,
        albums: state.albums.map(album => album.name === name ? updatedAlbum : album),
      };
    case 'deleteAlbum':
      return {
        ...state,
        albums: state.albums.filter(album => album !== action.payload)
      };
    default:
      return state;
  }
}
export default albumReducer
