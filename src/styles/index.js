export const styleAllProducts = {
  display: 'flex',
  flexWrap: 'wrap',
}

export const styleProductThumbnail = {
  display: 'flex',
  flexDirection: 'column',
  margin: '5vh 2vw',
  position: 'relative',
}

export const styleProductThumbnailImage = {
  position: 'relative',
}

export const styleProductThumbnailName = {
  position: 'absolute',
  zIndex: '1',
  background: '#FFF',
  width: '100%',
  height: '7%',
  padding: '2% 0',
  textAlign: 'center',
  transition: 'opacity 0.5s',
}

export const styleProductThumbnailPrice = {
  position: 'absolute',
  top: '80%',
  zIndex: '1',
  background: '#FFF',
  width: '25%',
  height: '5%',
  padding: '2%',
  textAlign: 'center',
  transition: 'opacity 0.5s',
}

export const styleSingleProductModal = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  height: '50vh',
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
}

export const styleModalBackdrop = {
  position: 'fixed',
  height: '100%',
  width: '100%',
  zIndex: '1',
  backgroundColor: '#000',
  opacity: '0.5',
}

export const styleSingleProductDetail = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100vh',
}
