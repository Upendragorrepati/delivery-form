import React, { useContext, useEffect } from 'react';
import { FormCtx } from './Form';

const Input = (props) => {
	const { id, label, type, width } = props;
	const { setFields, addField, fields, errors } = useContext(FormCtx);
	const field = fields[id] || {};
	const { name, rows, value, validate, placeholder, events = {}, classes = {} } = field;
	const fieldError = errors[id];

	const { onChange, ...restEvents } = events;
	const { contClass, fieldClass, errorClass } = classes;

	const handleChange = (event) => {
		try {
			setFields(event, field);
		} catch (error) {
			throw error;
		}

		if (typeof onChange === 'function') {
			onChange({
				...field,
				value: event.target.value
			});
		}
	};

	useEffect(() => {
		addField({
			field: props,
			value
		});
	}, []);

	const fieldProps = {
		...restEvents,
		id,
		name,
		type,
		value,
		validate,
		placeholder,
		className: fieldClass,
		onChange: handleChange
	};

	if (type === 'textarea') {
		delete fieldProps.type;
		delete fieldProps.value;

		fieldProps.defaultValue = value;
		fieldProps.rows = rows || 2;
	}

	return field && field.value !== undefined ? (
		<div className={contClass}>
			<div style={{ paddingBottom: '10px' }}>{label}</div>
			{type === 'textarea' ? (
				<textarea {...fieldProps} style={{ width: width }} />
			) : (
				<input {...fieldProps} style={{ width: width }} />
			)}
			<p className={errorClass}>{fieldError}</p>
		</div>
	) : (
		''
	);
};

export default Input;
