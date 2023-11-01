import Users from "@/components/Users";
import axios from "axios";

async function getUsers(page) {
	try {
		const response = await axios.get(`https://reqres.in/api/users?page=${page}`);

		return response.data.data;
	} catch (error) {
		console.log(error);
	}
}

const HomePage = async () => {
	const users = await getUsers();

	return (
		<main className="bg-slate-800 h-screen flex justify-center items-center">
			<Users users={users} />
		</main>
	);
};

export default HomePage;
