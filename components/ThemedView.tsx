import { View, useColorScheme } from "react-native";
import Colors from "../constants/Colors";

const ThemedView = ({ className = "", ...props }) => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	return (
		<View
			style={{ backgroundColor: theme.backgroundColor }}
			className={`flex-1 ${className}`}
			{...props}
		/>
	);
};

export default ThemedView;
