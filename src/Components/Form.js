import React, { createContext, Component } from 'react';

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
			addField: (data) => {
				this.addField(data);
			},
			setFields: this.setFields
		};

		return (
			<form onSubmit={this.handleSubmit}>
				<FormCtx.Provider value={formCtx}>{this.props.children}</FormCtx.Provider>
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
	};

	addField = ({ field }) => {
		const { id } = field;

		field = {
			value: '',
			...field
		};

		if (id) {
			this.setState((prevState) => {
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
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { fields } = this.state;
		console.log('***********');
		console.log('fields', fields);
		console.log('***********');
		console.log('individual input values');
		console.log(e.target[0].id + ' = ' + e.target[0].value);
		console.log(e.target[1].id + ' = ' + e.target[1].value);
		console.log(e.target[2].id && e.target[2].id + ' = ' + e.target[2].value);
		console.log(e.target[3].id && e.target[3].id + ' = ' + e.target[3].value);
		console.log(e.target[5].id + ' = ' + e.target[5].value);
		console.log('***********');
	};
}
