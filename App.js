// to do list
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, {useState} from 'react';
import Task from './components/Task';
import styles from './App.components.style';
import Form from './components/Form';
export default function App() {
  const [taskList, setTaskList] = useState([])
  //them cong viec
  const handleAddTask = (task) => {
    // alert(task);
    //Add task
    setTaskList([...taskList, task]);
  }
  //xoa cong viec
  const handleDeleteTask = (index) =>{
    // alert(index);
    Alert.alert(
      "Thông báo !!!",
      "Bạn có chắc chắn muốn xóa công việc này?",
      [
        {
          text: "OK",
          onPress: () => {
            let taskListTemp = [...taskList]; //copy du lieu tu taskList
            taskListTemp.splice(index,1);//xoa 1 index da chon
            setTaskList(taskListTemp);// setup lai taskList
          }
        },
        { text: "Cancel ", onPress: () => {} }
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Danh sách công việc </Text>
        <ScrollView style={styles.items}>
          {
            taskList.map((item,index) => {
              return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
            })
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask}/>

    </View>
  )
}

