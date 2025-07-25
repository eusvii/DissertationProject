import { Image } from "react-native";

const Logo = () => {
	const logo = require("../assets/img/logo.png");

	return (
		<Image
			source={logo}
			style={{ width: 120, height: 30, margin: 15 }}
			resizeMode="contain"
		/>
	);
};

export default Logo;
