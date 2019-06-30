import React from "react";

const Settings = () => {
	return (
		<div>
			<h3>User Settings Page</h3>
			<ul>
				<li>Paremeter - A</li>
				<li>Paremeter - B</li>
				<li>Paremeter - C</li>
			</ul>
			<div className="users-data">
				<h3 className="text-center">Registered users</h3>
				<table className="table">
					<thead>
						<tr>
							<th>User email</th>
							<th>Phone number</th>
							<th>Password</th>
						</tr>
					</thead>
					<tbody />
				</table>
			</div>
		</div>
	);
};

export default Settings;
