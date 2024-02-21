import React from 'react'
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import './Reviews.css'
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'
import person4 from '../assets/person4.jpg'


const Reviews = () => {
  return (
    <div className='reviews-section container'>
        <h2 className='text-center mb-5 text-uppercase fw-bold fs-1'>Avaliações</h2>
        <div className='row g-4'>
            <div className='col-lg-6'>
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className='p-4'>
                            <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center'>
                        <img src={person1} alt="" className='img-fluid rounded-circle mx-3' />
                        <CardTitle className='text-success'>João Paulo</CardTitle>
                    </CardFooter>
                </Card>
            </div>
            <div className='col-lg-6'>
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className='p-4'>
                            <CardText>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center'>
                        <img src={person2} alt="" className='img-fluid rounded-circle mx-3 shadow' />
                        <CardTitle className='text-success'>Mariana Ferraz</CardTitle>
                    </CardFooter>
                </Card>
            </div>
            <div className='col-lg-6'>
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className='p-4'>
                            <CardText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center'>
                        <img src={person3} alt="" className='img-fluid rounded-circle mx-3 shadow' />
                        <CardTitle className='text-success'>Daniela Wisley</CardTitle>
                    </CardFooter>
                </Card>
            </div>
            <div className='col-lg-6'>
                <Card className='h-100 shadow'>
                    <CardBody>
                        <div className='p-4'>
                            <CardText>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!
                            </CardText>
                        </div>
                    </CardBody>
                    <CardFooter className='d-flex align-items-center'>
                        <img src={person4} alt="" className='img-fluid rounded-circle mx-3 shadow' />
                        <CardTitle className='text-success'>Ricardo Ramos</CardTitle>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Reviews