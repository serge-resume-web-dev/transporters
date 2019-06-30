import React, { useState, useEffect } from "react";

const Settings = () => {
	const [data, setData] = useState([]);
	const url =
		"https://5d0f6dddc56e7600145a42a6.mockapi.io/api/v1/users-database";

	useEffect(() => {
		async function fetchUsers() {
			const response = await fetch(url);
			response
				.json()
				.then(response => setData(response))
				.catch(error => console.log("Error: ", error));
		}
		fetchUsers();
	}, []);

	return (
		<div>
			<div className="users-data jumbotron">
				<h3 className="text-center">Registered users</h3>
				<table className="table">
					<thead>
						<tr>
							<th>User email</th>
							<th>Phone number</th>
							<th>Password</th>
						</tr>
					</thead>
					<tbody>
						{data.map(item => (
							<tr key={item.id}>
								<td>{item.email}</td>
								<td>{item.phone}</td>
								<td>{item.password}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Settings;
