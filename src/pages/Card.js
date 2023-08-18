import React from 'react'
import { useSelector } from 'react-redux'
import { Addedlist } from '../components'
const Card = () => {
  const products = useSelector(state => state.cartState)
  const list = products.cartlist
  // console.log(list)
  return (
    <>
    <p className='h4 text-center text-primary'>Card Item={list.length}</p>
    <p className='h5 text-center text-primary'>Total Price={products.total}</p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th className='text-center'>SN</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Pricee</th>
            <th className='text-center'>Image</th>
            <th className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, idx) => (
            <Addedlist key={item.id} item={item} idx={idx} />
          ))}
        </tbody>
      </table>

    </>
  )
}

export default Card