export const styleHeader = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  borderBottom: 'solid black 2px',
}

export const styleAllProducts = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

export const styleProductThumbnail = {
  display: 'flex',
  flexDirection: 'column',
  margin: '2vw',
  position: 'relative',
}

export const styleProductThumbnailCard = {
  margin: '1vw 0',
  backgroundColor: '#eee'
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

export const styleSingleProductModal = (width) => ({
  position: 'fixed',
  top: '40%',
  left: '50%',
  height: width,
  width: width,
  transform: 'translate(-50%, -50%)',
  zIndex: '2',
})

export const styleModalBackdrop = {
  position: 'fixed',
  height: '100%',
  width: '100%',
  zIndex: '1',
  backgroundColor: '#000',
  opacity: '0.5',
  top: 0,
}

export const styleSingleProductDetail = {
  display: 'flex',
  justifyContent: 'space-around',
  height: '100vh',
}

export const styleSingleProductDetailLeft = (product) => ({
  padding: '1vw',
  backgroundColor: '#eee',
  maxHeight: product.hero.height,
  margin: '2vw 0',
})

export const styleMaterialIcons = {
  fontSize: '56px',
  color: '#fff',
  cursor: 'pointer',
}

export const styleMaterialIconsContainer = (width, xPosition, yPosition) => {
  let top, left
  if (xPosition === 'left') {
    left = 0
  } else if (xPosition === 'right') {
    left = width - 56
  }

  if (yPosition === 'middle') {
    top = (width / 2) - 23
  } else if (yPosition === 'top') {
    top = 0
  }

  return {
    backgroundColor: '#333',
    opacity: '0.5',
    borderRadius: '50%',
    position: 'absolute',
    height: '56px',
    top: top,
    left: left,
  }
}

export const styleAddToCart = {
  minHeight: '2em',
  width: '7em',
  height: '5vh',
  fontSize: '1em',
  borderRadius: '5%',
  backgroundColor: '#ddeef0'
}
