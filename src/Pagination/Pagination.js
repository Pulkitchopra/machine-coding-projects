import React, {useState, useEffect} from 'react'
import './style.css'
const Pagination = () => {


    const [products, setProducts] = useState([]);

    const [productPage, setProductPage] = useState(1);

    const fetchProducts = async () => {
        
        const res = await fetch('https://dummyjson.com/products?limit=80')

        const data = await res.json();
        if(data && data.products ) {
            setProducts(data.products)
        }
    }



    useEffect(() => {

        fetchProducts();
    }, [] );




    const selectHandler = (selectedHandlerPage) => {

        if(



            selectedHandlerPage >= 1 && 

            selectedHandlerPage <= products.length && 

            selectedHandlerPage !== productPage
        )
        setProductPage(selectedHandlerPage);

    };

  return (

    <div>


    { products.length > 0 && (


    <div className='products'>

    { products.slice( productPage * 10 - 10, productPage * 10 ).map((product) => {

       
       
        return (
            <span className='products-single-items' key={product.id}>

            <img src={product.thumbnail} alt={product.title}/>
            <span>{product.title}</span>
            </span>
        );
    } ) }

    </div>
    )  }


    {

        products.length > 0 && 


    <div className='pagination'>

    <span onClick={() => selectHandler(productPage - 1) } style={{ display: ` ${ productPage > 1 ? ' flex' : 'none' }` }}  >Previous Page</span>
    {

        [ ...Array( products.length / 10) ].map((_, p) => {


            return <span onClick={() => selectHandler( p + 1 ) }  key={p} style={{ backgroundColor: ` ${ productPage === p + 1 ? 'gray' : 'white' } ` }}  >{ p + 1 }</span>
        } )

    }
    <span onClick={() => selectHandler(productPage + 1) } style={{ display: ` ${ productPage < products.length / 10 ? 'flex' : 'none' } ` }}  >Next Page</span>


    </div>

    }
      
    </div>
  )
}

export default Pagination
