import React from 'react'
import Nav from '../Nav'
export const Card = (props) => {
    return (
        <>
        
        <div className='col py-0 mt-0 mb-2'>
            <div className='card py-1 px-2'>
                <img src={props.img} className='img-fluid' />
                <div className='card-body'>
                    <h3>{props.name}</h3>
                    <p>{props.inventory}</p>
                    <h5>{props.id}</h5>
                </div>
            </div>
        </div>
        </>
       

    )
}
