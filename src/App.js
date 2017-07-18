
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addProductToInventory, removeProduct } from './actions';

import Searchbar from './components/searchbar';
import NewProductForm from './components/newproductform';
import Chance from 'chance';
export const chance = Chance();


/* TODO: HOMEWORK!!!!!
 *
 * 1. Create the action to remove a product, and update the state to remove a product by id
 * 2. OPTIONAL: Create a more flexible product making form that will allow you to make a product with all field data, show this data too
 * 3. OPTIONAL: Create a filter search bar that allows you to shrink the list of products by whats typed!
 * hint: it would help if you updated the global state with every keystroke!*
 */


const RemoveButton = ({remove, id}) => <button onClick={ () => remove(id) }>Remove item</button>



class App extends Component {


  render() {
    const { products, newProductForm, visibleProducts, add, remove } = this.props;
    const handleSearchSubmit = e => {
      e.preventDefault();
      return add(newProductForm.values)
    };

    return (
      <div>
        <Searchbar />

        {visibleProducts.map(product => {
          return([
            <li key={product.id}>
              {product.name}
              <RemoveButton remove={remove} id={product.id} />
            </li>
          ])
        })}

        <NewProductForm onSubmit={ handleSearchSubmit } />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  visibleProducts: state.products.filter(prod => prod.name.includes(state.textInput)),
  newProductForm: state.form.new_product
});

const mapDispatchToProps = {
  add: addProductToInventory,
  remove: removeProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
