import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';
import Navigation from '../Navigation/NavigationPage'; // Import Navigation component
import Footer from '../Footer/FooterPage';

// Higher-order component to pass navigate prop
function withNavigate(Component) {
  return props => <Component {...props} navigate={useNavigate()} />;
}

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      error: ''
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products'); // Update the URL if necessary
      if (response.ok) {
        const products = await response.json();
        this.setState({ products });
      } else {
        console.error('Failed to fetch products');
        this.setState({ error: 'Failed to fetch products' });
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      this.setState({ error: 'Error fetching products' });
    }
  };

  render() {
    const { products, error } = this.state;

    return (
      <div>
        <Navigation /> {/* Include Navigation component */}
        <div className="Products">
          <h2 className='head'>Product List</h2>
          {error && <p className="error-message">{error}</p>}
          <ul>
            {products.map(product => (
              <li key={product._id}>
                <h3>{product.productName}</h3>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
              </li>
            ))}
          </ul>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withNavigate(Products);