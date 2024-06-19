import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ButtonDefaultProps {
  title?: string;
  icon: React.ReactNode;
  onPress: () => void;
}

export function ButtonDefault({ title, icon, onPress }: ButtonDefaultProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.content}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}