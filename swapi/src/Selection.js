import React from 'react';

const Selection = () => {
	const fields = ['planets', 'spaceships', 'vehicles', 'people', 'films', 'species'];
	return (
		<div>
			<span>Awaken Data</span> 
			<form>
				<select name="fields">
					{
						fields.forEach(field => {
						return (<option value={field}>{field}</option>);
						})
					}
				</select>
			</form>
		</div>
	);
};

export default Selection;