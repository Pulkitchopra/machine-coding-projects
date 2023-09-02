import React, {useState} from 'react'
import Modal from './Modal'
const Index = () => {
    
    
    const [openModal, setOpenModal] = useState(false);

  return (

    <div>



    <button className='openModalButton' onClick={() => {setOpenModal(true); } }>Open</button>

    { openModal && <Modal closeModal = {setOpenModal} /> }
      
    </div>
  )
}

export default Index
