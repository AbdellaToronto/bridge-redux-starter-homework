import React from 'react';
import { inputChange } from '../actions/search.js';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  textInput: state.textInput,
});

//shouldn't this be a function?
const mapDispatchToProps = {
  onTextInputChange: inputChange,
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
