import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addProduct, removeProduct, inputChange, searchProducts } from './actions';
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
        // filtering: https://gkedge.gitbooks.io/redux-course-notes/content/14-React_Todo_List_Example_Filtering_Todos.html
        products: state.products.filter(element => {
            return element.name.indexOf(state.searchInput.toLowerCase()) !== -1
        }),
        textInput: state.textInput,
        searchInput: state.searchInput,
    });
};

const mapDispatchToProps = {
    add: addProduct,
    remove: removeProduct,
    onInputChange: inputChange,
    onSearchProducts: searchProducts,
};

const Product = (props) =>
    <div className="product">
        <b>{props.name}</b><br/>
        {props.department}<br/>
        {props.price}<br/>
        <b>Stock: </b>{props.stock}<br/>
        <RemoveButton remove={props.remove} id={props.id} />
    </div>;

const InputFields = ({textInput, onInputChange, add}) => (
    <div>
        <input
            placeholder="Product name"
            value={textInput.name}
            name="name"
            onChange={ev => onInputChange(ev.target.value, ev.target.name)}
        />
        <input
            placeholder="Department"
            value={textInput.department}
            name="department"
            onChange={ev => onInputChange(ev.target.value, ev.target.name)}
        />
        <input
            placeholder="Stock"
            value={textInput.stock}
            name="stock"
            onChange={ev => onInputChange(ev.target.value, ev.target.name)}
        />
        <input
            placeholder="Price"
            value={textInput.price}
            name="price"
            onChange={ev => onInputChange(ev.target.value, ev.target.name)}
        />
        <button className="submit-button"
                onClick={ () => add({...textInput, id: chance.guid()})}>
            Add Product
        </button>
    </div>);

const RemoveButton = ({remove, id}) => <button onClick={ () => remove({id})}>Remove</button>;

const Search = ({searchInput, onSearchProducts}) =>
    (<div>
        <input
            placeholder="Search by product name"
            value={searchInput}
            name="search"
            onChange={ev => onSearchProducts(ev.target.value)}
        />
    </div>);


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { products } = this.props;
    return (
      <div className="product-wrapper">
        {products.map(product =>
            <Product name={product.name}
                     key={product.id}
                     id={product.id}
                     department={product.department}
                     price={product.price}
                     stock={product.stock}
                     {...this.props} />)}
          <InputFields {...this.props} />
          <Search {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
