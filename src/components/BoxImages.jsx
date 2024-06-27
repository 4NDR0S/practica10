import React from 'react'

import mainImg from '../assets/image-product-1.jpg'

import img1 from '../assets/image-product-1-thumbnail.jpg'
import img2 from '../assets/image-product-2-thumbnail.jpg'
import img3 from '../assets/image-product-3-thumbnail.jpg'
import img4 from '../assets/image-product-4-thumbnail.jpg'

export default function BoxImages() {
  return (
    <div className='box-images'>
        <img src={mainImg} alt="main-img"  className='img-main'/>
        <div className='images-small'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
    </div>
  )
}
