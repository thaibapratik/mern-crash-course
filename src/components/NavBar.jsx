import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const NavBar = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className="flex justify-between my-2 mx-6">
			<div>
				<h1 className="text-2xl text-blue-700">PRODUCT STORE🛒</h1>
			</div>
			<div className="flex gap-4">
				<button className="p-2 bg-slate-700 rounded-lg">
					<CiSquarePlus size={25} color="white" />
				</button>
				<button
					className="p-2 bg-slate-700 rounded-lg"
					onClick={() => setDarkMode(!darkMode)}
				>
					{darkMode ? (
						<FaMoon size={25} color="white" />
					) : (
						<FaSun size={25} color="white" />
					)}
				</button>
			</div>
		</div>
	);
};
export default NavBar;
