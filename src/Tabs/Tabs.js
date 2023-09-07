import React, {useState} from 'react'
import './Tabs.css'
const Tabs = () => {


    const Tabs = [

        {

            id: 1,
            content: 'Tab 1 content',
            title: 'Tab 1',
        },
        {



            id: 2,

            content: 'Tab 2 content',

            title: 'Tab 2',
        },
        {

            id: 3,
            content: 'Tab 3 content',
            title: 'Tab 3',

        },
        {


            id: 4,

            content: 'Tab 4 content',
            
            title: 'Tab 4',
        },

    ];




    const [currentTab, setCurrentTab] = useState(1);




    
    const handleClick = (e) => {

        setCurrentTab(e.target.id)
    }


    return (

        <div className='container'>

            <div className='tabs-container'>

            {Tabs.map(({title, index, id}) => {
                return(


                 <button key={index} id = { id }  onClick={(handleClick)} className= {currentTab === id ? 'tabs active-tabs' : 'tabs' } > 


                 {title}

                </button>
                )
            })}

              

            </div>

            <div className='content-tabs'>

            <div className='content'>


            {Tabs.map(({content, id, index}) => {

                return(

            <div key={index} className= {currentTab === id ? 'content active-content' : 'content' } >


            { currentTab === `${id}` && 
            
            
            <div>

            <p>{ content } </p>

            </div>
            }


            </div>
                )
            })}

            </div>

            </div>




        </div>
    )
}

export default Tabs
