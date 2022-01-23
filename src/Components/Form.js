import React, { createContext, Component } from "react";



export const FormCtx = createContext({
  fields: {},
  errors: {}
});

export default class Form extends Component {
  state = {
    fields: {},
    errors: {}
  };

  render() {
    const { fields, errors } = this.state;
    const formCtx = {
      fields,
      errors,
      addField: data => {
        this.addField(data);
      },
      setFields: this.setFields
    };

    return (
      <form onSubmit = {this.handleSubmit}>
        <FormCtx.Provider value={formCtx}>
          {this.props.children}
        </FormCtx.Provider>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  setFields = (event, { id }) => {
    event.persist();

    const { fields } = this.state;
    const field = fields[id];

    this.addField({
      field: {
        ...field,
        value: event.currentTarget.value
      }
    });
    console.log('fieldfdf', field)
  };

  addField = ({ field }) => {
    const { id } = field;

    field = {
      value: "",
      ...field
    };
    console.log('field', field)

    if (id) {
      this.setState(prevState => {
        return {
          ...prevState,
          fields: {
            ...prevState.fields,
            [id]: field
          }
        };
      });

      return;
    }

    throw new Error(`please add 'id' field to the input: ${field}`);
  };

 handleSubmit = (e) => {
    e.preventDefault();
    //console.log()
    const { fields } = this.state;
    console.log(fields)

} 


}