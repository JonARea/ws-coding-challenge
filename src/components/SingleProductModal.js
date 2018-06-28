import React from 'react'
import {styleSingleProductModal, styleModalBackdrop} from '../styles/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SingleProductModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImage: 0,
      isOpen: props.isOpen
    }
  }

  render() {
    const {images, closeModal, isOpen} = this.props
    const {currentImage} = this.state
    return (
      isOpen ? (
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionAppear={true}
          transitionAppearTimeout={500}
        >
          <div className="singleProductModal" style={styleSingleProductModal}>
            <img
              src={images[currentImage].href}
              alt={images[currentImage].alt}
            />
            <div onClick={closeModal}>CLOSE ME</div>
            <div onClick={() => this.setState({currentImage: (currentImage + 1) % images.length})}>NEXT IMAGE</div>
          </div>
          <div className="modalBackdrop" style={styleModalBackdrop} />
        </ReactCSSTransitionGroup>
      ) : null
    )
  }

}

export default SingleProductModal
