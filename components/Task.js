import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Task = ({name, handleClick, id}) => {
  return (
    <TouchableOpacity onPress={() => handleClick(id)}>
      <View style={styles.item}>
        <View style={styles.firstCont}>
          <View style={styles.box} />
          <Text style={{fontSize: 15, marginHorizontal: 10}}>{name}</Text>
        </View>
        <View style={styles.circle} />
      </View>
    </TouchableOpacity>
  );
};

export default Task;

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: '#eeeeee',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  firstCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  box: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#add8e6',
  },

  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: '#add8e6',
  },
});
