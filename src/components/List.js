import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../store/cardSlice'

const List = ({ item }) => {
    const product = useSelector(state => state.cartState.cartlist)
    const dispatch = useDispatch()
    const { id, name, price, img } = item
    const [data, setdata] = useState(false)
    useEffect(() => {
        const productincard = product.find(item => item.id === id)
        if (productincard) {
            setdata(true)
        }
        else {
            setdata(false)
        }

    }, [id, product])
    return (
        <>
            < div className='col-6 col-md-4 m-auto mb-1 mt-2'>
                <div className="card w-75  m-auto mb-2">
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column align-items-center">
                        <p className="h5 card-text text-center">{name}</p>
                        <p className="h6 text-primary"><em>Rs.{price}</em></p>
                        {data ? (<p className="btn btn-danger" onClick={() => dispatch(remove(item))}>Remove</p>) :
                            (<p className="btn btn-success" onClick={() => dispatch(add(item))}>Add</p>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default List