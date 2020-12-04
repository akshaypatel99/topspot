import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './Modal.scss';

const Modal = ({ handleClose, show, children }) => {
	let modal = null;

	if (show) {
		modal = (
			<div className='Modal-main'>
				{children}
				<button onClick={handleClose} className='btn-secondary my-1'>
					<FontAwesomeIcon icon={faTimesCircle} size='1x' /> Close
				</button>
			</div>
		);
	}

	return modal;
};

export default Modal;
