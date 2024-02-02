import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const res = useRouteError();
  console.log(res);
  return (
    <div className='container m-5'>
      <h1>Opp's Something Went Wrong!!</h1>
      <div className='bg-light p-5 shadow rounded'>
        <h2 className='text-danger'>{res?.status} : {res?.statusText}</h2>
        <h3 className='text-danger'>{res?.data}</h3>
      </div>
    </div>
  )
}

export default Error;