import Image from "next/image";
import Link from "next/link";

const Users = ({ users }) => {
	return (
		<section className=" flex flex-col w-fit gap-2">
			{users.map((user) => (
				<Link key={user.id} href={`/users/${user.id}`}>
					<div className="flex cursor-pointer gap-2 bg-blue-900 rounded-md overflow-hidden">
						<div className="w-14">
							<Image width={100} height={100} src={user.avatar} alt={user.first_name} />
						</div>
						<div className="flex flex-col">
							<h3 className="text-xl font-bold text-white">{user.first_name}</h3>
							<p className="text-white">{user.email}</p>
						</div>
					</div>
				</Link>
			))}
		</section>
	);
};

export default Users;
