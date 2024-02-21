import React from 'react'
import {Link} from 'react-router-dom';

export const MenuBtn = () => {
  return (
    <div>
        <Link to='/menu'>
        <button type='button' className='btn btn-success btn-lg'>Veja Mais</button>
        </Link>
    </div>
  )
}

export default MenuBtn