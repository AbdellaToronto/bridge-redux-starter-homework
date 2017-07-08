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
 * hint: it would help if you updated the global state with every keystroke!*
 */

const mapStateToProps = state => {
  return ({
  products: state.products,
  //lowStockProducts: state.products.filter(prod => prod.stock && prod.stock < 4),
})};

const mapDispatchToProps = {
  add: addProduct,
  remove: removeProduct,
};

const Product = (props) => <div>{props.name}</div>;

//but, the point of Redux is I should not be passing props down from Product to RemoveButton

//why does this work with add sofa, when it has no id? Probably it shouldn't work
const RemoveButton = ({remove, id}) => <button onClick={ () => remove(id) }>Remove item</button>



//new form will replace AdderButton?
const AdderButton = ({add}) => <button onClick={ () => add({ name: 'Sofa' }) }>Add Sofa</button>

//this should be a stateless component?
//but how can you go without a lifecycle method?
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
    const { products, add, remove } = this.props;
    //debugger;
    return (
      <div>
        {products.map(product => {
          return([
            <li>
              <Product name={product.name} key={product.id} />
              <RemoveButton remove={remove} id={product.id} />
            </li>
          ])
        })}

        <AdderButton { ...this.props } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
