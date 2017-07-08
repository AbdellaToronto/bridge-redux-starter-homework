import React from 'react';
import { searchProducts } from '../actions/search.js';
import { connect } from 'react-redux';

//do I do the connect in this component or in App.js?
const mapStateToProps = state => ({
  products: state.products,
  textInput: state.textInput,
});

//shouldn't this be a function
const mapDispatchToProps = {
  onTextInputChange: searchProducts,
};


const Searchbar = ({textInput, onTextInputChange}) => (


      <div>
        <h3>Search by product name</h3>

          <input
            value={textInput}
            type="string"
            className="input"
            onChange={ev => onTextInputChange(ev.target.value)}
          />

      </div>

)








export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
