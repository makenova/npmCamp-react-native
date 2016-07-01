import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { colors } from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
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

export const Schedule = ({ item, navigator }) =>
  <View style={styles.container}>
    <NavigationBar
      title={{ title: item.name, tintColor: colors.white }}
      style={styles.navigationBar}
      leftButton={{
        title: 'Back',
        tintColor: colors.yellow,
        handler: navigator.pop,
      }}
    />
    <View style={styles.scheduleItemContainer}>
      <Text style={styles.scheduleDescription}>About {item.name}</Text>
    </View>
  </View>;

Schedule.propTypes = {
  item: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};
