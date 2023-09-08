import React, {useState} from 'react'
import './style.css'
const Accordion = () => {


    const data = [

        {

            question: 'Question 1',
            answer: 'Answer 1'
        },

        {
            question: 'Question 2',
            answer: 'Answer 2'

        },



        {

            question: 'Question 3',
            answer: 'Answer 3'
        },

        {

            question: 'Question 4',
            answer: 'Answer 4'
        },

    ]

    const [accordion, setAccordion] = useState(false)

    const handleClick = (index) => {

        if( accordion === index ){
            return(setAccordion(null))
        }



        setAccordion(index);
    }




  return (

    <div className='container'>

    <div className='accordion'>

    {data.map(({question, answer, index  }) => {


        return(

    <div className='item' key={index}>




    <div className='title' onClick={() => handleClick(index)} >






    <h5>{question}</h5>




    <span> { accordion === index ? '-' : '+' } </span>


    </div>


    <div className= { accordion === index ? 'content show' : 'content' }>

    <p> {answer} </p>

    </div>
    


    </div>
        )
    })}

    </div>
      
    </div>

  )
}

export default Accordion
