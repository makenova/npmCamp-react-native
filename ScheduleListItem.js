import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  scheduleListItemContainer: {
    marginBottom: 15,
  },
  speakerName: {
    color: 'white',
    fontFamily: 'Helvetica-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const ScheduleListItem = ({ item, navigator }) => {
  function renderScheduleItem(scheduleItem) {
    navigator.push({
      sceneTitle: 'schedule',
      item: scheduleItem,
    });
  }

  return (
    <TouchableOpacity
      onPress={() => renderScheduleItem(item)}
    >
      <View style={styles.scheduleListItemContainer}>
        <Text style={styles.speakerName}>item</Text>
      </View>
    </TouchableOpacity>
  );
};

ScheduleListItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};
