import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addProduct, removeProduct , typeName, typeDepartment, typePrice, typeSearch } from './actions';
import Chance from 'chance';
export const chance = Chance();

/* TODO: HOMEWORK!!!!!
 *
 * 1. Create the action to remove a product, and update the state to remove a product by id
 * 2. OPTIONAL: Create a more flexible product making form that will allow you to make a product with all field data, show this data too
 * 3. OPTIONAL: Create a filter search bar that allows you to shrink the list of products by whats typed!
 *            hint: it would help if you updated the global state with every keystroke!
  * */

  /* 

  homework solution questions:

    - went back on forth on whether to split out reducers into separate files (there are
    only 3 and they aren't too long but seems like it may be useful for clarity if
    revisiting later... advise?)

    - also wondering the same for components: should they only be split out if there is starting
    to be too much code on main file or is it good practice to split out regardless of length?

  */ 

const mapStateToProps = state => {
  return ({
    products: state.products.filter(product => `${product.name} ${product.department}`.toLowerCase().includes(state.searchInput.toLowerCase()) ) ,
    productsForm: state.productsForm,
    searchInput: state.searchInput,
  })
};

const mapDispatchToProps = {
  add: addProduct,
  remove: removeProduct,
  typeName,
  typeDepartment,
  typePrice,
  typeSearch, 
};

const Product = (props) => <div className="single-product"><h4>{props.name}</h4> <h3>{props.price}</h3> <h6>{props.department}</h6> <RemoveButton {...props} /> </div>;

const AdderButton = ({add, productsForm}) => <button onClick={ () => { add({...productsForm, id: chance.guid()})} }>Add Product</button>;

const RemoveButton = ({remove, id}) => <button onClick={ () => { remove(id) }} >remove</button>;

const InputField = ({inputFunc, fieldType, val, className}) => <div className={className}><h3>{fieldType}</h3><input value={val} onChange={(e) => { inputFunc(e.target.value)} } /></div>;

const ProductForm = (props) => (
  <div className="product-form">
  <InputField inputFunc={props.typeName} fieldType="Name" val={props.productsForm.name} />
  <InputField inputFunc={props.typeDepartment} fieldType="Department" val={props.productsForm.department} />
  <InputField inputFunc={props.typePrice} fieldType="Price" val={props.productsForm.price} />
  <AdderButton {...props}/>
  </div>
);

const SearchInput = (props) => (
  <InputField className="search-box" inputFunc={props.typeSearch} fieldType="Search by name and department" val={props.searchInput} />
);

class App extends Component {


  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <SearchInput {...this.props} />
        <ProductForm {...this.props} />
        {products.map(product => <Product name={product.name} id={product.id} key={product.id} price={product.price} department={product.department} {...this.props}/>)}

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
