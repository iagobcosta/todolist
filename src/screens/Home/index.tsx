import { useState } from "react";
import { Text, View, Image, FlatList, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from "./styles";
import { TextInputDefault } from "../../components/TextInputDefault";
import { ButtonDefault } from "../../components/ButtonDefault";
import { TaskCount } from "../../components/TaskCount";
import { Divider } from "../../components/Divider";
import { ListEmpty } from "../../components/ListEmpty";
import { ListCard } from "../../components/ListCard";

type TaskProps = {
  id: string;
  title: string;
  isCompleted: boolean;
}

export const Home = () => {

  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function contTaskCompleted() {
    return tasks.filter((task) => task.isCompleted).length
  }

  function handleCreateTask() {
    if (taskName === "" || taskName.trim() === "" || taskName.length <= 4) return
    setTasks([...tasks, {
      id: String(tasks.length + 1),
      title: taskName,
      isCompleted: false
    }])
    setTaskName("")
  }

  function handleCompleteTask(task: TaskProps) {
    const newTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    setTasks(newTasks)
  }

  function handleDeleteTask(task: TaskProps) {
    const newTasks = tasks.filter((item) => item.id !== task.id)
    setTasks(newTasks)
  }

  function handleAlertDeleteTask(task: TaskProps) {
    Alert.alert("Certeza que deseja excluir esta tarefa?", "Ao excluir a tarefa, ela não será mais visível", [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Excluir",
        onPress: () => handleDeleteTask(task),
        style: "destructive"
      }
    ])
  }

  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Image source={require('../../images/Logo.png')} />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInputDefault
            placeholder="Adicione uma nova tarefa"
            value={taskName}
            onChangeText={setTaskName}
          />
          <ButtonDefault
            icon={<MaterialIcons name="add-circle-outline" size={24} color="white" />}
            onPress={() => handleCreateTask()}
          />
        </View>

        <View style={styles.tasks}>
        <TaskCount title="Criadas" count={tasks.length} textColor="#4EA8DE"/>
        <TaskCount title="Concluídas" count={contTaskCompleted()} textColor="#5E60CE"/>
        </View>

        <Divider />
      </View>

      <FlatList
        data={tasks}
        contentContainerStyle={{paddingHorizontal: 24}}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListCard
            title={item.title}
            isCompleted={item.isCompleted}
            onComplete={() => handleCompleteTask(item)}
            onDelete={() => handleAlertDeleteTask(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <ListEmpty /> }        
      />

    </View>
  );
}