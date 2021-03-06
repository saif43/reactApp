import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  /*using arrow function to access renderError function of our 
  StreamForm class. 
  Or our app will confuese between "this" of StreamForm class and
  "this" of Field component
  */
  renderTextInput = formProps => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    }`;

    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input type="text" {...formProps.input} autoComplete="off" />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          label="Enter Title"
          component={this.renderTextInput}
        />
        <Field
          name="description"
          label="Enter Description"
          component={this.renderTextInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);

// const formWrapped = reduxForm({
//   form: "StreamForm",
//   validate
// })(StreamForm);

// export default connect(null, { createStream })(formWrapped);
