import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import Task from './components/Task';

const App = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState(['qasim', 'sample', 'sasamsmms']);
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
              <Task name={val} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Write Task section  */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.bottomContainer}>
          <TextInput
            style={styles.textField}
            value={task}
            onChangeText={e => setTask(e)}
          />
          <TouchableOpacity>
            <View style={styles.plusCont}>
              <Text style={styles.plusIcon}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    bottom: 40,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textField: {
    borderWidth: 0.2,
    width: '70%',
  },

  plusCont: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginLeft: 10,
  },

  plusIcon: {
    fontSize: 30,
  },
});
