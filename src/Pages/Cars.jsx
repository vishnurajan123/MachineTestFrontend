import React from 'react'

import Item from '../Components/Item'

function Cars() {
  return (
    <>
    <div>
        <h1 className='text-center'>Car Lists</h1>

        <div className='row align-items-center w-100'>
            <div className='col-lg-4'>
<Item/>
            </div>
            <div className='col-lg-4'>
            <Item/>

</div>
<div className='col-lg-4'>
<Item/>

</div>

        </div>


    </div>
    </>
  )
}

export default Cars