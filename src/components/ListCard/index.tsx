import { Text, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { styles } from "./styles"

interface ListCardProps {
  isCompleted: boolean
  title: string
  onComplete: () => void
  onDelete: () => void
}

export const ListCard = ({ isCompleted, title, onComplete, onDelete }: ListCardProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          <Checkbox
            style={styles.checkbox}
            value={isCompleted}
            onValueChange={onComplete}
            color={isCompleted ? "#5E60CE" : '#4EA8DE'}
          />
          <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.text, isCompleted && { color: '#808080', textDecorationLine: 'line-through' }]}>{title}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={onDelete}
        >
          <MaterialCommunityIcons name="trash-can-outline" size={24} color="#808080" />
        </TouchableOpacity>
      </View>

    </View>
  )
}