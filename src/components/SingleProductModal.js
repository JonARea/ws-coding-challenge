import React from 'react'
import {
  styleSingleProductModal,
  styleModalBackdrop,
  styleMaterialIcons,
  styleMaterialIconsContainer,
} from '../styles/index'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class SingleProductModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0,
      isOpen: props.isOpen
    }
  }

  render() {
    const {images, closeModal, isOpen} = this.props
    const {currentImageIndex} = this.state
    const  currentImage = images[currentImageIndex]
    return (
      isOpen ? (
        <ReactCSSTransitionGroup //handles fade in
          transitionName="modal"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={50}
          transitionLeaveTimeout={50}
        >
          <div
            className="singleProductModal"
            style={styleSingleProductModal(currentImage.width)}
          >
            <img
              className="singleProductModalImage"
              src={currentImage.href}
              alt={currentImage.alt}
            />
            {currentImageIndex < images.length - 1 && //only show if there is a next
              <div style={styleMaterialIconsContainer(currentImage.width, 'right', 'middle')}>
                <i
                  className="material-icons md-48"
                  style={styleMaterialIcons}
                  onClick={() => this.setState({currentImageIndex: (currentImageIndex + 1) % images.length})}
                >
                  navigate_next
                </i>
              </div>
            }
            {currentImageIndex > 0 && //only show if there is a previous
              <div
                style={styleMaterialIconsContainer(currentImage.width,
                  'left', 'middle')}>
                <i
                  className="material-icons md-48"
                  style={styleMaterialIcons}
                  onClick={() => this.setState({currentImageIndex: Math.abs((currentImageIndex - 1) % images.length)})}
                >
                  navigate_before
                </i>
              </div>
            }
            <div
              style={styleMaterialIconsContainer(currentImage.width,
                'right', 'top')}>
              <i
                className="material-icons md-48"
                style={styleMaterialIcons}
                onClick={closeModal}>close
              </i>
            </div>
          </div>
          <div className="modalBackdrop" style={styleModalBackdrop} />
        </ReactCSSTransitionGroup>
      ) : null
    )
  }
}

export default SingleProductModal
