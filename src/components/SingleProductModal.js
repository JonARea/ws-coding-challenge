import React from 'react'
import {styleSingleProductModal, styleModalBackdrop, styleMaterialIcons} from '../styles/index'
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
          transitionEnterTimeout={50}
          transitionLeaveTimeout={50}
        >
          <div className="singleProductModal" style={styleSingleProductModal}>
            <img
              src={images[currentImage].href}
              alt={images[currentImage].alt}
            />
            {currentImage < images.length - 1 &&
              <i
                className="material-icons md-48"
                style={{...styleMaterialIcons, top: '35%'}}
                onClick={() => this.setState({currentImage: (currentImage + 1) % images.length})}
              >
                navigate_next
              </i>
            }
            {currentImage > 0 &&
              <i
                className="material-icons md-48"
                style={{...styleMaterialIcons, top: '35%', left: '-10%'}}
                onClick={() => this.setState({currentImage: Math.abs((currentImage - 1) % images.length)})}
              >
                navigate_before
              </i>
            }
            <i
              className="material-icons md-48"
              style={styleMaterialIcons}
              onClick={closeModal}>close
            </i>
          </div>
          <div className="modalBackdrop" style={styleModalBackdrop} />
        </ReactCSSTransitionGroup>
      ) : null
    )
  }

}

export default SingleProductModal
