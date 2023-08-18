import React from 'react'
import { List } from '../components'

const Home = () => {
  const products = [
    { id: 1, name: "I-Phone", price: 250000, img: "/assets/1.jpg" },
    { id: 2, name: "Laptop", price: 80000, img: "/assets/2.jpg" },
    { id: 3, name: "Refrigerator", price: 25000, img: "/assets/3.jpg" },
    { id: 4, name: "Microwave Oven", price: 12000, img: "/assets/4.jpg" },
    { id: 5, name: "Washing machine", price: 10000, img: "/assets/5.jpg" },
    { id: 6, name: "Tv", price: 11000, img: "/assets/6.jpg" },
  ]
  return (
  <>
    <div className='card mt-4 mb-2 bg-body-secondary'>
        <p className='h3 text-center text-light bg-danger'>Feature Product</p>
        <div className='row  w-100'>
          {products.map((item) => (
            <List key={item.id} item={item} />
          ))}
          </div>
          </div>
  </>
  )
}

export default Home