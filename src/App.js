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

const mapStateToProps = state => {
  return ({
  products: state.products.filter(product => `${product.name} ${product.department}`.toLowerCase().includes(state.searchInput) ) ,
  productsForm: state.productsForm,
  searchInput: state.searchInput,
})};

const mapDispatchToProps = {
  add: addProduct,
  remove: removeProduct,
  nameChange: typeName,
  departmentChange: typeDepartment,
  priceChange: typePrice,
  searchChange: typeSearch, 
};

const Product = (props) => <div>{props.name} {props.price} {props.department} <RemoveButton {...props} /> </div>;

const AdderButton = ({add, productsForm}) => <button onClick={ () => { add(productsForm)} }>Add Product</button>;

const RemoveButton = ({remove, id}) => <button onClick={ () => { remove(id) }} > remove this item </button>;

const ProductInput = ({inputFunc, fieldType, val}) => <div><h1>{fieldType}</h1><input value={val} onChange={(e) => { inputFunc(e.target.value)} } /></div>;

const ProductForm = (props) => (
  <div>
  <ProductInput inputFunc={props.nameChange} fieldType="Name" val={props.productsForm.name} />
  <ProductInput inputFunc={props.departmentChange} fieldType="Department" val={props.productsForm.department} />
  <ProductInput inputFunc={props.priceChange} fieldType="Price" val={props.productsForm.price} />
  <AdderButton {...props}/>
  </div>
);

const SearchInput = (props) => (
  <ProductInput inputFunc={props.searchChange} fieldType="Search" val={props.searchInput} />
);

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
      <div>
        <SearchInput {...this.props} />
        {products.map(product => <Product name={product.name} id={product.id} key={product.id} price={product.price} department={product.department} {...this.props}/>)}
        <h1>test form</h1>
        <ProductForm {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
