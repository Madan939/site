import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cardSlice'

const Addedlist = ({item,idx}) => {
  const dispatch=useDispatch()
    const {name,price,img}=item
  return (
<>
<tr>
<td className='text-center'>{idx+1}</td>
    <td className='text-center'>{name}</td>
    <td className='text-center'>{price}</td>
    <td className='text-center'>
      <img src={img} alt=''/>
    </td>
    {/* <td className='btn btn-danger w-75 p-1 m-auto' onClick={()=>dispatch(remove(item))}>Delete</td> */}
    <td className=''>
          <button type="button"className='btn btn-danger bg-danger text-light w-100' onClick={()=>dispatch(remove(item))}>Remove</button>
        </td>
</tr>
</>
  )
}

export default Addedlist