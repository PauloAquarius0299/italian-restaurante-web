import React from 'react';
import MenuBtn from '../components/MenuBtn'
import './Home.css';
import AboutImg from '../assets/about-img.jpg'
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 d-flex d-sm-block flex-column align-items-center'>
                        <h2 className='mb-0 text-black fw-bold'>Bem vindo ao</h2>
                        <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Italian Restaurant</h1>
                        <MenuBtn />
                    </div>
                </div>
            </div>
        </header>

        <div className='container my-5'>
            <div className='row'>
                <div className='col-lg-6 justify-content-center d-none d-lg-flex'>
                    <img src={AboutImg} className='img-fluid w-40 -h-50' alt="about img" />
                </div>
                <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                    <h2 className='fs-1 mb-5 text-uppercase fw-bold '>Sobre Nos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis tempora impedit veritatis totam maiores. Sapiente provident delectus dicta est, nobis ab explicabo labore quas, at sequi quo consectetur! Nostrum.</p>
                    <p className='mb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi veritatis qui, saepe aperiam cumque, voluptates natus dolore harum tempore laudantium totam officia culpa temporibus tempora, neque aut non dolorum nostrum nobis ab explicabo labore quas, at sequi quo consectetur! Nostrum.</p>
                    <Link to='/about' >
                        <button type='button' className='btn btn-outline-success btn-lg'>Leia Mais</button>
                    </Link>
                </div>
            </div>
        </div>

        <div className='menu-section py-5 text-light shadow'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Seus Favoritos</h2>
                <div className='row mb-5 w-100'>
                    <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                        <h3 className='fs-2 mb-5'>Pratos Tipicos</h3>
                        <ul className='px-0'>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2'>Pizza</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>$80,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2'>Espagete</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>$20,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2'>Risoto</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>$50,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2'>Bruschetta</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>$20,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2'>Tiramisù</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>$40,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2'>Osso Buco</p>
                                <p className='fs-3 mx-2 text-success fw-bold'>$30,00</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-6 d-flex-column align-items-center mb-5 mb-lg-0'>
                        <h3 className='fs-2 mb-5'>Bebidas</h3>
                        <ul className='px-0'>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2 text-success'>Vinho</p>
                                <p>$80,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2 text-success'>Cerveja</p>
                                <p>$8,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2 text-success'>Refrigerante</p>
                                <p>$10,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2 text-success'>Espumante</p>
                                <p>$50,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2 text-success'>Sucos</p>
                                <p>$7,00</p>
                            </li>
                            <li className='d-flex justify-content-between'>
                                <p className='fs-3 mx-2 text-success'>Cafe</p>
                                <p>$5,00</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;