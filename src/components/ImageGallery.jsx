import React from 'react'
import galleryImg1 from '../assets/galleryImg1.jpg'
import galleryImg2 from '../assets/galleryImg2.jpg'
import galleryImg3 from '../assets/galleryImg3.jpg'
import galleryImg4 from '../assets/galleryImg4.jpg'
import galleryImg5 from '../assets/galleryImg5.jpg'
import galleryImg6 from '../assets/galleryImg6.jpg'

const ImageGallery = () => {
    return (
        <div className='container py-5'>
            <h2 className='text-center fs-1 mb-5 text-uppercase fw-bold'>Galeria de Imagens</h2>
            <div className='row'>
                <div className='col-md-4 px-2'>
                    <div className='my-3'>
                        <img src={galleryImg1} className='img-fluid' />
                    </div>
                    <div className='my-3'>
                        <img src={galleryImg2} className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-4 px-2'>
                    <div className='my-3'>
                        <img src={galleryImg3} className='img-fluid' />
                    </div>
                    <div className='my-3'>
                        <img src={galleryImg4} className='img-fluid' />
                    </div>
                </div>
                <div className='col-md-4 px-2'>
                    <div className='my-3'>
                        <img src={galleryImg5} className='img-fluid' />
                    </div>
                    <div className='my-3'>
                        <img src={galleryImg6} className='img-fluid' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ImageGallery;