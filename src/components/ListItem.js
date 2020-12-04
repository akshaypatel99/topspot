import React from 'react';

const ListItem = ({ number, image, data1, data2 }) => {
	return (
		<div className='ListItem'>
			<div className='ListItem-Number'>
				<h3>#{number + 1}</h3>
			</div>
			<div className='ListItem-Image'>
				<img src={image} alt='' />
			</div>
			<div className='ListItem-Data1'>
				<h2>{data1}</h2>
			</div>
			<div className='ListItem-Data2'>
				<h3>{data2}</h3>
			</div>
		</div>
	);
};

export default ListItem;
