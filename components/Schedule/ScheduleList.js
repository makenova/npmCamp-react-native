import React from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import ScheduleListItem from './ScheduleListItem';
import SCHEDULE_LIST from '../../schedule.db';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  scheduleContainer: {
    flex: 1,
    marginTop: 60,
    backgroundColor: colors.charcoal,
  },
  scheduleListContainer: {
    marginBottom: 10,
  },
});

const ScheduleList = ({ navigator }) => {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });

  function renderRow(item) {
    return (
      <ScheduleListItem item={item} navigator={navigator} />
    );
  }

  return (
    <View style={styles.scheduleContainer}>
      <ListView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scheduleListContainer}
        dataSource={dataSource.cloneWithRows(SCHEDULE_LIST)}
        renderRow={renderRow}
      />
    </View>
  );
};

ScheduleList.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default ScheduleList;
