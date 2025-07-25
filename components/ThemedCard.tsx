import { View, useColorScheme } from "react-native";
import Colors from "../constants/Colors";

const ThemedCard = ({ className = "", ...props }) => {
	const colorScheme = useColorScheme();
	const theme = colorScheme ? Colors[colorScheme] : Colors.light;

	return (
		<View
			style={{
				backgroundColor: theme.cardBackground,
				borderColor: theme.cardBorderColor,
				borderWidth: 1
			}}
			className={`m-5 rounded-md py-20 ${className}`}
			{...props}
		/>
	);
};

export default ThemedCard;
