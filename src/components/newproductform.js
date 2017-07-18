
import React from 'react'
import { Field, reduxForm } from 'redux-form'



let NewProductForm = ({onSubmit}) => (
  <div>

    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Product Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="department">Department Name</label>
        <Field name="department" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <Field name="price" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="stock">Number in Stock</label>
        <Field name="stock" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="id">Product ID</label>
        <Field name="id" component="input" type="number" />
      </div>

      <button type="submit">Add Product to Inventory</button>
    </form>
  </div>
)

export default reduxForm({ form: 'new_product' })(NewProductForm);
