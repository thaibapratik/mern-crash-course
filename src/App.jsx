import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<div>
			<Router>
				<div className="min-h-[100vh]">
					<NavBar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/create" element={<CreatePage />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
};

export default App;
