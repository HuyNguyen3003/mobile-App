import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import Task from './component/Task';
import { useEffect, useState } from 'react';


export default function App() {

  const [task, settask] = useState('')
  const [taskItem, settaskItem] = useState([])

  useEffect(() => {
    settaskItem([...taskItem, 'Play game'])

  }, [])

  handleAdd = () => {
    settaskItem([...taskItem, task])
    settask('')

  }

  handleDelete = (index) => {
    let taskCoppy = [...taskItem]
    taskCoppy.splice(index, 1)
    settaskItem(taskCoppy)

  }





  return (
    <View style={styles.container}>


      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle} >Today's tasks</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        scrollEventThrottle={1}
      >
        <View style={styles.items}>
          {taskItem && taskItem.length > 0
            && taskItem.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => handleDelete(index)}>
                  <Task text={item} />
                </TouchableOpacity>

              )
            })
          }

        </View>

      </ScrollView>




      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput
          value={task}
          onChangeText={text => settask(text)}
          style={styles.input} placeholder='Write a task'
        />

        <TouchableOpacity onPress={() => handleAdd()}>
          <View style={styles.add}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>


      </KeyboardAvoidingView>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'

  },
  items: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',


  },
  writeTask: {
    position: 'absolute',
    top: '80%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
    marginLeft: 10

  },
  add: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginRight: 10



  },
  scrollView: {
    maxHeight: '63%'

  },

  addText: {

  },
});
