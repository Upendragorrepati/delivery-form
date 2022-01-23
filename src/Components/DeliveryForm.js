import React, { useState } from 'react';

import Form from './Form';
import Input from './Input';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import '../styles/deliveryForm.scss';

const DeliveryForm = () => {
	const [ addressLookup, setAddressLookup ] = useState(true);
	const [ isDeliveryForSomeoneElse, setDeliveryForSomeoneElse ] = useState(false);

	const handleAddress = (e, value) => {
		e.preventDefault();
		setAddressLookup(value);
	};
	const handleDeliveryForSomeoneElse = () => {
		setDeliveryForSomeoneElse(!isDeliveryForSomeoneElse);
	};

	return (
		<div className="DeliveryForm">
			<div className="DeliveryForm__menu">
				<div className="left">
					<HomeOutlinedIcon />
					<p> Reservations </p>
				</div>

				<input type="text" />

				<div className="right">
					<div className="cart">
						<ShoppingCartOutlinedIcon />
						{/* should set dynamioc value */}
						<span> (2) </span>
					</div>
					<div className="profile">
						<PersonOutlineOutlinedIcon />
						<KeyboardArrowDownOutlinedIcon />
					</div>
				</div>
			</div>

			<h2 className="DeliveryForm__heading"> Delivery Address</h2>
			<div className="DeliveryForm__container">
				<Form>
					<div className="firstrow">
						<Input id="name" type="text" label="Name" width="80%" />
						<Input id="company" type="text" label="Company(optional)" width="95%" />
					</div>

					{addressLookup && <Input id="lookupaddress" type="text" label="Address lookup" width="100%" />}

					{!addressLookup && <Input id="manualaddress" type="textarea" label="Full address" width="100%" />}
					<div className="addressLookupButton">
						{addressLookup ? (
							<button onClick={(event) => handleAddress(event, false)}> Enter addres manually </button>
						) : (
							<button onClick={(event) => handleAddress(event, true)}> Look up address </button>
						)}
					</div>

					<Input
						id="deliveryinstructions"
						type="textarea"
						label="Delivery instructions(optional)"
						width="100%"
					/>

					<div className="deliveryFor">
						<input
							name="deliveryforSomeoneElse"
							id="deliveryForSomeOne"
							type="checkbox"
							checked={isDeliveryForSomeoneElse}
							onChange={(event) => handleDeliveryForSomeoneElse(event)}
						/>
						<label>This delivery is for someone else</label>
					</div>

					{isDeliveryForSomeoneElse ? (
						<React.Fragment>
							<Input
								id="additionalcontactemail"
								type="text"
								label="Additional contcat email(optional)"
								width="100%"
							/>
							<Input
								id="additionalcontactphone"
								type="text"
								label="Additional contcat number(optional)"
								width="100%"
							/>
						</React.Fragment>
					) : (
						<React.Fragment />
					)}
				</Form>
			</div>
		</div>
	);
};

export default DeliveryForm;
