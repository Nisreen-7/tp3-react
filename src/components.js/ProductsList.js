import { useState } from 'react';
import productsData from '../products-data';
import Product from './Product';
import './ProductsList.css';
import Buttons from './Buttons';

function ProductsList() {
  const [productList, setProductList] = useState(productsData);


//le code suivant pour apport le data from api (url)

//   const [productList, setProductList] = useState([]);

//   useEffect(()=>{
// fetch('https://fackstoreapi.com/products')
// .then((response)=> response.json())
// .then((data)=> console.log(data))

//   },[]);


  const menuProducts = [...new Set(productsData.map((product) => product.category))];

  const filterProducts = (cat) => {
    const newProductList = productsData.filter((product) => product.category === cat);
    setProductList(newProductList);
  }

  const products = productList.map((product) => {
    return (
      <div key={product.id}>
      
        <Product key={product.id} product={product} />
      </div>
    ) ;
  });

  return (
    <div className="products-list">
        <p className='titre'>Choisissez parmi nos catégories</p>
          <Buttons
          menuProducts={menuProducts}
          filterProducts={filterProducts}
          setProductList={setProductList}
        />
        
                <div className='row'>
                       {products}
                </div>
        
     
    </div>
  )
}

export default ProductsList;
