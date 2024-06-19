import { Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles"

export const ListEmpty = () => {

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="clipboard-text-outline" size={56} color="#808080" />
      <Text style={styles.title}>Voce ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}