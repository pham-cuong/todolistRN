//Part 1
// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerTop}>
//         <View style={styles.top}>
//           <Text style={styles.topText}>Top Left </Text>
//         </View>
//       </View>
//       <View style={styles.containerCenter}>
//       <View style={styles.center}>
//           <Text style={styles.centerText}>Center </Text>
//         </View>
//       </View>
//       <View style={styles.containerBottom}>
//         <View style={styles.bottom}>
//           <Text style={styles.bottomText}>Bottom Right </Text>
//         </View>
//       </View>



//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#e3fdff'
//   },
//   containerTop: {
//     flex: 1,

//   },
//   top: {
//     marginTop: 80,
//     marginHorizontal: 40,
//     backgroundColor: '#fffdff',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: 'red'
//   },
//   topText: {
//     color: 'blue',
//     fontWeight: 'bold'
//   },
//   containerCenter: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   center: {
//    width: 150,
//    height: 150,
//    backgroundColor: '#33ff60',
//    borderRadius:100,
//    justifyContent: 'center',
//    alignItems: 'center',

//   },
//   centerText: {
//     color: 'blue',
//     fontWeight: 'bold'
//   },
//   containerBottom: {
//     flex: 1,

//   },
//   bottom: {
//     marginTop: 80,
//     marginHorizontal: 40,
//     backgroundColor: '#61bfd6',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 18
//   },
//   bottomText: {
//     textAlign: 'right',
//     color: 'white',
//     fontWeight: 'bold'
//   },
// });

//Par 2: to do list
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

