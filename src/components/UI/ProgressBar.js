import React from 'react';

const ProgressBar = ({ title, width }) => {
	return (
		<div className='ProgressBar'>
			<h4>{title}:</h4>
			<div className='progress'>
				<div style={{ width: `${width}%` }}></div>
			</div>
		</div>
	);
};

export default ProgressBar;
