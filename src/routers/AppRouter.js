import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import LoginScreen from "../screen/LoginScreen";
import LandingScreen from "../screen/LandingScreen";
import HomeScreen from "../screen/HomeScreen";

// const ProtectedRoute = ({ children }) => {
// 	const { auth } = useAuth();
// 	return (auth.isAuthenticated) ? (
// 		children
// 	) : (
// 		<Navigate to="/" />
// 	);
// };
export const AppRouter = () => {
	return (
		<Router>
			<Routes >
				<Route path="/" element={<LandingScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/home" element={<HomeScreen />} />
				{/* <Route path="/home" >
					<ProtectedRoute>
						<HomeScreen />
					</ProtectedRoute>
				</Route> */}
			</Routes>
		</Router>
	);
};
