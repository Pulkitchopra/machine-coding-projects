import React from 'react'
import './style.css'
const Modal = ({closeModal}) => {

  return (
    <div className='modal-background'>

    <div className='modal'>

    <div className='button'>

    
    
    <button onClick={() => closeModal(false) }>Close Modal</button>

    </div>

    <div className='title'>

    <h1>Are you sure that you want to continue?</h1>

     </div>

    <div className='body'>



    <p>Page is Awesome</p>

     </div>



    <div className='footer'>

    <button onClick={() => closeModal(false) } >Cancel</button>

    <button>Continue</button>
    
     </div>

    </div>
      
    </div>


  )
}

export default Modal
