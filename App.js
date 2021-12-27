import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
  Keyboard,
} from 'react-native';
import Task from './components/Task';

const App = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    setTaskItems([...taskItems, {name: task, id: randomNumber}]);
    setTask('');
    Keyboard.dismiss();
  };

  const completeTask = id => {
    const tasks = [...taskItems];
    const index = tasks.findIndex(val => val?.id === id);
    tasks.splice(index, 1);
    setTaskItems(tasks);
  };
  return (
    <View style={styles.container}>
      {/* section */}
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.section}>
          <Text style={styles.heading}>Today's Tasks</Text>
          <View style={styles.tasksContainer}>
            {taskItems?.map((val, index) => (
              <Task
                name={val?.name}
                handleClick={completeTask}
                key={index}
                id={val?.id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Write Task section  */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.bottomContainer}>
        <TextInput
          style={styles.textField}
          value={task}
          placeholder="Write task here"
          onChangeText={e => setTask(e)}
        />
        <TouchableOpacity onPress={addTask}>
          <View style={styles.plusCont}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
  },

  section: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  tasksContainer: {
    marginTop: 40,
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textField: {
    width: '79%',
    padding: 15,
    borderRadius: 50,
    backgroundColor: '#fff',
  },

  plusCont: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginLeft: 5,
  },

  plusIcon: {
    fontSize: 30,
  },
});
