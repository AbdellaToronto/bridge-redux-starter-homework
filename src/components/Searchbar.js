import React from 'react';
import { inputChange } from '../actions/search.js';
import { connect } from 'react-redux';



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


const mapStateToProps = state => ({
  textInput: state.textInput,
});


const actions = {
  onTextInputChange: inputChange,
};

export default connect(mapStateToProps, actions)(Searchbar);
