import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { loginAPI, registerAPI } from './Services/allAPI';
import { useNavigate } from 'react-router-dom';


function Auth() {
    const [isRegister,setIsRegister]=useState(false)
    const [userdata,setUserdata]=useState({
        username:"",
        email:"",
        password:"",
        phone:""
      })
      const naviagate=useNavigate()

      const handleRegister=async (e)=>{
        e.preventDefault()
        const {username,email,password,phone}=userdata
        if(!username || !email || !password || !phone){
          alert("Please fill the form completely")
        }

        else{
            var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/;
            if(password.match(passw)  ) {



                const result=await registerAPI(userdata)
                if(result.status===200){
                  alert("user registered successfully")
                  setUserdata({
                    username:"",
                email:"",
                password:"",
                phone:""
                  })
                  setIsRegister(false)
                }
                else{
                  alert(result.response.data)
                  console.log(result);
                }




                
            }
            else{
                alert("Password must contain atleast 1 small letter 1 capital letter 1 number and 1 special charecters..")
            }



        
        }
      }

      const handleLogin=async (e)=>{
        e.preventDefault()
        const {email,password}=userdata
        if(!email || !password){
          alert("Please fill the form completely")
        }
        else{
          const result=await loginAPI(userdata)
          if(result.status===200){
            alert("User loginned successfully...")
           
            setUserdata({
              email:"",
              password:""
            })
            naviagate('/cars')
          }
          else{
            alert(result.response.data)
            alert(result);
          }
        }
      
      }

      console.log(userdata);
  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5 pt-5'>
        <div  className='d-flex justify-content-center align-items-center   bg-white shadow rounded w-50 mt-5 p-5'>
      
      <div >
   
       <div  className='auth'> 
   <h3 className='text-warning text-center'> Login here</h3>
   <Form>
     {  isRegister&&
   <Form.Group className="mb-3" controlId="formBasicText">
           <Form.Control value={userdata.username} onChange={(e)=>setUserdata({...userdata,username:e.target.value})}   type="text" placeholder="Enter Username" />
           
         </Form.Group>}
       
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control value={userdata.email} onChange={(e)=>setUserdata({...userdata,email:e.target.value})}  type="email" placeholder="Enter email"
             />
           
           
         </Form.Group>
   
         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Control value={userdata.password} onChange={(e)=>setUserdata({...userdata,password:e.target.value})}  type="password" placeholder="Password" 
           
           />
         </Form.Group>
         {  isRegister&&
   <>
     
     <Form.Group className="mb-3" controlId="formBasicText">
             <Form.Control value={userdata.phone} onChange={(e)=>setUserdata({...userdata,phone:e.target.value})}  type="number" placeholder="Phone" 
            
             />
             
           </Form.Group>
           
   </>
       
       }
         
         <p className='text-center'>
   
   {isRegister?
             <button onClick={handleRegister} className='btn btn-dark'   type="submit">
               Register
             </button>:
              <button onClick={handleLogin} className='btn btn-dark'   type="submit">
              Login
            </button>
             }
   
   
   
         </p>
       </Form>
   {
   isRegister?
   <h5 className='text-center'> Already have an accound ? <a onClick={()=>setIsRegister(false)}  className='' style={{cursor:"pointer",textDecoration:"none",color:"blue"}} ><span>Login</span></a> </h5>
   
   :
       <h5 className='text-center' > Don't have an accound ? <a onClick={()=>setIsRegister(true)}  className='' style={{cursor:"pointer",textDecoration:"none",color:"blue"}} ><span>Register</span></a> </h5>
   
   }
       </div>


      </div>
</div>


    </div>
  )
}

export default Auth