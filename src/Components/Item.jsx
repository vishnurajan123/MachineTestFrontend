import React from 'react'
import AddCategory from '../Components/AddCategory'
import AddCar from '../Components/AddCar'
function Item() {
  return (
    <div className='m-2 p-2 shadow'>
    
Ford <br />
<AddCategory/> <br />
<AddCar/>

<div className='border p-5 w-100'>
    Categories

</div>
<div className='border p-5 w-100'>
    Cars

</div>

    
    </div>
  )
}

export default Item