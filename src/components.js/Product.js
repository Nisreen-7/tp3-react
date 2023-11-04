import './Product.css';

function Product(props) {
return(
    <div className='card' > 
        
        <img src= {props.product.image} alt=''/>
        <h1 className='card-title'> {props.product.title} </h1>
        <p className='card-description'> Description :{props.product.description}</p>
        <p className='card-price'>  
        <button className='btnn'>Acheter</button> Price: {props.product.price} €
        </p>

        <p className='card-category'><mark>Category :</mark>{props.product.category}</p>
        <p className='card-rating'>Rating :{props.product.rating.rate}, Count: {props.product.rating.count} </p>
    </div>
)

}
export default Product; 