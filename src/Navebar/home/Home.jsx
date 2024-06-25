import React from 'react'
import products from '../products.json';
import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers'
import { Card } from './Card';
import './Home.css'
const Home = () => {

  return (
    <div className='container mt-5'>
      <h2 className='text-center'>Offers</h2>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 align-items-center '>
      {products.map((value) => {
        return (
          <Card
            img={value.image}
            name={value.name}
            inventory={value.inventory}
            id={value.id}
          />
        )
      })}
      </div>
    </div>
  )
}

export default Home