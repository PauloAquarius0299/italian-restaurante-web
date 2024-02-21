import React from 'react'
import './Contact.css';
import { Form } from 'react-bootstrap';
import  Reviews  from '../components/Reviews';
import { ContactInfo } from '../components/ContactInfo';

const Contact = () => {
  return (
    <div className='contact-page'>
        <header className='mt-5'>
            <div className='container h-100 d-flex align-items-center justify-content-center'>
                <h1 className='text-light'>Contatos</h1>
            </div>
        </header>

        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                    <ContactInfo />
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <Form>
                        <Form.Group className='row mb-3'>
                            <div className='col-mb-6'>
                                <Form.Label htmlFor='firt-name'>Primerio Nome</Form.Label>
                                <Form.Control type='text' id='firts-name' />
                            </div>
                            <div className='col-mb-6'>
                                <Form.Label htmlFor='last-name'>Ultimo Nome</Form.Label>
                                <Form.Control type='text' id='last-name' />
                            </div>
                        </Form.Group>
                        <Form.Group className='row mb-3'>
                            <div className='col-md-6'>
                                <Form.Label htmlFor='email-address' >Email</Form.Label>
                                <Form.Control type='email' id='email-address' />
                            </div>
                            <div>
                                <Form.Label htmlFor='phone-number'>Numero</Form.Label>
                                <Form.Control type='tel' id='phone-number' />
                            </div>
                        </Form.Group>
                        <Form.Group className='row mb-3'>
                            <div className='col-mb-6'>
                                <Form.Label htmlFor='date' >Data</Form.Label>
                                <Form.Control type='date' id='date' />
                            </div>
                            <div className='col-mb-6'>
                                <Form.Label htmlFor='guests-number' >Número de Convidados</Form.Label>
                                <Form.Control type='number' id='guests-number' />
                            </div>
                        </Form.Group>
                        <Form.Group className='mb-4'>
                            <Form.Label htmlFor='comments'>Comemtários</Form.Label>
                            <Form.Control type='textarea' id='comments' />
                        </Form.Group>

                        <button type='submit' className='btn btn-success btn-lg' >Enviar</button>
                    </Form>
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <Reviews />
        </div>
    </div>
  )
}

export default Contact