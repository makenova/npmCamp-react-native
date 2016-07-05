import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
    paddingTop: 60,
  },
  navigationBar: {
    backgroundColor: colors.red,
  },
  navigatorText: {
    fontFamily: 'Helvetica-Bold',
  },
  scheduleItemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 10,
  },
  scheduleDescription: {
    color: colors.white,
  },
});

export const Schedule = ({ item }) =>
  <View style={styles.container}>
    <View style={styles.scheduleItemContainer}>
      <Text style={styles.scheduleDescription}>{item.title}</Text>
      {item.speakers.map(speaker => <Text key={speaker}>{speaker}</Text>)}
    </View>
  </View>;

Schedule.propTypes = {
  item: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};
