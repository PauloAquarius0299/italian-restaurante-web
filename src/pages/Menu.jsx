import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakFastImg from '../assets/cafe.jpg';
import LunchImg from '../assets/lunch-img.jpg'
import DinnerImg from '../assets/dinner-img2.jpg'
import DessertImg from '../assets/dessert-img.jpg'

import './Menu.css'


const dinner = [
    {
        id: 1,
        name: 'Risoto',
        description: 'Arroz; Caldo de carne e vegetais; Queijo; Vinho Branco; Manteiga e Aspargos',
        price: '$50,00',
    },
    {
        id: 2,
        name: 'Ossobuco alla Milanese',
        description: 'Vitela Cozidos; Molho; Vinho Branco; Caldo de Carne; Tomate; Cebola; Cenoura e Aipo',
        price: '$40,00',
    },
    {
        id: 3,
        name: 'Osso Buco',
        description: 'Osso com Tutano; Mirepox; Tomate; Vinho Branco; Caldo de carne e vegetais; Ervas e Farinha',
        price: '$30,00',
    },
];
const lunch = [
    {
        id: 1,
        name: 'Pizza  Margherita',
        description: 'Molho de Tomate; Queijo mussarela; Folhas de Manjericão; Cebola e Azeitonas',
        price: '$80,00',
    },
    {
        id: 2,
        name: 'Bruschetta',
        description: 'Pão; Alho; Azeite de Oliva; Tomate; Manjericão;Queijo; Azeitonas; Cogumelos; Presunto; Pimentões e Berinjela',
        price: '$20,00',
    },
    {
        id: 3,
        name: 'Linguine alla Puttanesca',
        description: 'Massa Longa e Fina; Molho Picante; Tomate; Azeitonas; Alcaparras; Alho e Anchovas',
        price: '$30,00',
    },
    
];

const dessert = [
    {
        id: 1,
        name: 'Tiramisù',
        description: 'Biscoito "Savoiardi"; Café Espresso e Creme de Mascarpone',
        price: '$40,00',
    },
    {
        id: 2,
        name: 'Panna Cotta',
        description: 'Creme de Leite; Gelatina e Baunilha',
        price: '$22,00',
    },
    {
        id: 3,
        name: 'Gelato',
        description: 'Textura Cremosa e Macia; Chocolate; Morango; Baunilha; Pistache; Limão Siciliano etc...',
        price: '$8,00',
    },
];

const breakfast = [
    {
        id: 1,
        name: 'Fette Biscottate',
        description: 'Pão Torrado, Manteiga, Geléia ou Nutella',
        price: '$7,00',
    },
    {
        id: 2,
        name: 'Brioche ou Cornetto',
        description: 'Paozinho doce, Creme, Geleia e Nutella',
        price: '$5,00',
    },
    {
        id: 3,
        name: 'Suco Natural de Frutas',
        description: 'Copo de 400, 300 e 200ml de Suco Natural',
        price: '$8,00',
    },
]


const Menu = () => {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-cold text-success'>Café da Manhã</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakFastImg} alt='breakfast' className='img-fluid w-75 mt-4 mt-lg-0' />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text- py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Pratos Famosos</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bf-dark text-'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} alt='lunch' className='img-fluid w-75 mt-4 mt-lg-0' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Tradicionais</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text- py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Sobremesa</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bf-dark text-'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                               {dessert.name} 
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} alt='dessert' className='img-fluid w-75 mt-4 mt-lg-0' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;