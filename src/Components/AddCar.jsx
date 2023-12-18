import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCarAPI } from '../Services/allAPI';

function AddCar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [car,setCar]=useState("")
  const [parent,setParent]=useState("")

  const handleAdd=async(e)=>{
    e.preventDefault()
    if(!car || !parent){
       alert("Please fill the form completely")
    }
    else{
        const reqBody=new FormData()
        reqBody.append("category","")
        reqBody.append("car",car)
        reqBody.append("parentCategoryId",parent)
    
           const result=await addCarAPI(reqBody)
           if(result.status===200){
            alert("Car added successfully")

            handleClose()

            
           }
           else{
                console.log(result);
                alert(result.response.data.response)
           }
    
}}
  

  return (
    <>
      <Button className='mt-2' variant="primary" onClick={handleShow}>
        Add new Car
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input  value={car} onChange={(e)=>setCar(e.target.value)} className='form-control' type="text" placeholder='Enter Car name' />
         <input value={parent} onChange={(e)=>setParent(e.target.value)} className='form-control mt-3' type="text" placeholder='Enter Parent Category name' />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCar;