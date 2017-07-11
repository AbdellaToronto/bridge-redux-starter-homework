import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from './actions';
import Chance from 'chance';
export const chance = Chance();

/* TODO: HOMEWORK!!!!!
 *
 * 1. Create the action to remove a product, and update the state to remove a product by id
 * 2. OPTIONAL: Create a more flexible product making form that will allow you to make a product with all field data, show this data too
 * 3. OPTIONAL: Create a filter search bar that allows you to shrink the list of products by whats typed!
 *            hint: it would help if you updated the global state with every keystroke!
  * */

const mapStateToProps = state => {
  return ({
      products: state.products,
  })};

const mapDispatchToProps = {
    add: addProduct,
    remove: removeProduct,
};

const Product = (props) => <div className="product"><b>{props.name}</b><br/>{props.department}<br/>{props.price}<br/><b>Stock: </b>{props.stock}<br /><Remove {...props} /></div>;

const AdderButton = ({add}) => <button onClick={ () => add({ name: 'Sofa', department: 'Sofa', stock: '10', price: '$500', id: chance.guid() }) }>Add Sofa</button>;

const Remove = ({remove, id}) => <button onClick={ () => remove({id})}>Remove</button>;

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.add({
      id: chance.guid(),
      name: 'Table',
      department: 'Furniture',
      price: '300.00',
      stock: 5,
    });
  }

  render() {
    const { products } = this.props;
    return (
      <div className="product-wrapper">
        {products.map(product => <Product name={product.name} key={product.id} id={product.id} department={product.department} price={product.price} stock={product.stock} {...this.props} />)}
        <AdderButton { ...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
