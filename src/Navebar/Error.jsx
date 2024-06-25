import React from 'react'

const Error = () => {
  return (
    <>
    <div className='d-flex justify-content-center flex-column align-items-center'style={{height:'100vh'}}>
    <h1 style={{fontSize:'100px'}}>Opps</h1>
      <h1 className='text-danger'>404 Error Page</h1>
      <h5>Sorry, This page doesn't exist</h5>
    </div>
    </>
  )
}

export default Error