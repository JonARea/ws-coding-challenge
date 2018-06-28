import React from 'react'
import {styleSingleProductModal, styleModalBackdrop} from '../styles/index'

const SingleProductModal = ({images, isOpen, closeModal}) => (
  isOpen ? (
    <div>
      <div className="singleProductModal" style={styleSingleProductModal}>
        <img src={images[0].href} alt={images[0].alt} />
        <div onClick={closeModal}>CLOSE ME</div>
      </div>
      <div className="modalBackdrop" style={styleModalBackdrop} />
    </div>
  ) : null
)

export default SingleProductModal
