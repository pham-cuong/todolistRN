import { View, Text, TextInput,Alert } from 'react-native'
import React, {useState} from 'react'
import styles from './style';
import { TouchableOpacity,KeyboardAvoidingView, Keyboard } from 'react-native';
const Form = (props) => {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if(task.length === 0){
           Alert.alert(   'Thông báo !!!','Bạn vui lòng nhập tên công việc !')
            return false;
        }
        props.onAddTask(task);
        setTask('');//reset lai input text khi nhap xong 1 cong viec
        Keyboard.dismiss();// nhap xong 1 cong viec tu mat keyboard
    }
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset ={10}
    style={styles.addTask}>
      <TextInput
      value={task}
      onChangeText={(text) => setTask(text)} 
      placeholder='Nhập tên công việc' 
      style={styles.input}/>
      <TouchableOpacity onPress={handleAddTask}>
      <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
      </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

export default Form;