import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addProduct, removeProduct, updateProductsList } from './actions';
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
  whoIsTheBest: 'Yihua',
  lowStockProducts: state.products.filter(prod => prod.stock && prod.stock < 4),
})};

const mapDispatchToProps = {
  add: addProduct,
  remove : removeProduct,
  update : updateProductsList
};

const Product = (props) => <div><RemoveButton name={props.name} {...props}/> {props.name}</div>;

const DaBest = ({name}) => <h1>The Best: {name}</h1>;

const AdderButton = ({add}) => <button onClick={ () => add({ name: 'Sofa' }) }>Add Sofa</button>;

// const RemoveButton = ({remove, name}) => <button onClick={ () => remove({ name: 'Sofa' }) }>remove item</button>

const RemoveButton = ({name, remove}) => <button onClick={ () => remove({ name }) }>remove item</button>;

const SearchBar = ({ update }) => <input type="text" placeholder="search" onChange={ evt => update({ searchValue: evt.target.value }) }/>;

const AdderProduct = ({add}) => {
  let productName = '';
  let productDepartment = '';
  let productPrice = '';
  let productStock = 0;
  return (
    <div>
      <input className="productNameInput" type="text" placeholder="Enter the product name" onChange={ (evt) => productName = evt.target.value}></input>
      <input type="text" placeholder="Enter the product department" onChange={ (evt) => productDepartment= evt.target.value}></input>
      <input type="text" placeholder="Enter the product price" onChange={ (evt) => productPrice= evt.target.value}></input>
      <input type="text" placeholder="Enter the product stock" onChange={ (evt) => productStock= Number(evt.target.value)}></input>
      <button type="submit" onClick={ () => {
          if(productName !== "") {
            return add({ name: productName, department: productDepartment, price: productPrice, stock: productStock })
          }
          
          {/*document.querySelector('.productNameInput').value('');*/}
       } }>Add item</button>
    </div>
    );
  };

// const CreateNewItem = 
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
    const { products, add, whoIsTheBest } = this.props;
    return (
      <div>
        <SearchBar { ...this.props }/>
        <DaBest name={whoIsTheBest} />
        {products.map(product => <Product name={product.name} key={product.id} { ...this.props }/>)}

        <AdderProduct { ...this.props }/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
