import { Text, View } from "react-native"
import { styles } from "./styles"


interface TaskCountProps {
  title: string
  count: number
  textColor?: string
}

export const TaskCount = ({ title, count, textColor }: TaskCountProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      <View style={styles.contentCount}>
        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  )
}