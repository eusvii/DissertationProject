import { Text, useColorScheme } from "react-native";
import Colors from "../constants/Colors";

const ThemedText = ({ className = "", ...props }) => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	return (
		<Text style={{ color: theme.text }} className={className} {...props} />
	);
};

export default ThemedText;
