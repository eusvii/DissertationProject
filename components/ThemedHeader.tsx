import ThemedText from "./ThemedText";

const ThemedHeader = ({ className = "", ...props }) => {
  return (
    <ThemedText
      className={`ml-5 mt-5 text-2xl font-bold ${className}`}
      {...props}
    />
  );
};

export default ThemedHeader;
