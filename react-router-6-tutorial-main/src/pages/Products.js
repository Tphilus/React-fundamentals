
import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    
      <section className='section'>
        <h2>products</h2>
       {products?.map((product) => {
        const {name, id} = product;
        return <article key={id}>
          <h5> {name} </h5>
          <Link to={`/products/${product.id}`} >more info</Link>
        </article>
       })}
      </section>
    
  );
};

export default Products;
