import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-slate-700">
			<div className="container mx-auto py-8">
				<ul className="flex gap-5 text-white justify-center">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
