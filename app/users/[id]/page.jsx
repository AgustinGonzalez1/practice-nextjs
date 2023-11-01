import axios from "axios";
import Image from "next/image";

const getUser = async (id) => {
	try {
		const response = await axios.get(`https://reqres.in/api/users/${id}`);
		return response.data.data;
	} catch (error) {
		console.log(error);
	}
};

const UserPage = async ({ params }) => {
	const user = await getUser(params.id);
	console.log(user);

	return (
		<main className="bg-slate-800 h-screen flex justify-center items-center">
			<section className="flex flex-col cursor-pointer gap-5 p-5 bg-blue-900 rounded-md overflow-hidden">
				<div className="flex gap-5">
					<div className="rounded-md">
						<Image className="rounded-md" width={150} height={150} src={user.avatar} alt={user.first_name} />
					</div>
					<div className="text-white flex flex-col justify-between">
						<div>
							<h3 className="text-3xl">{user.first_name}</h3>
							<p className="text-3xl">{user.last_name}</p>
						</div>
						<p className="text-xl">id: {user.id}</p>
					</div>
				</div>
				<div className="text-white">
					<p className="text-center text-xl">Email: {user.email}</p>
				</div>
			</section>
		</main>
	);
};

export default UserPage;
