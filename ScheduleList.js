import React, { Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { ScheduleListItem } from './SpeakersListItem';
import { SCHEDULE_LIST } from './schedule.db';
import { SPEAKER_LIST } from './speakers.db';
import { colors } from './constants';

const styles = StyleSheet.create({
  scheduleContainer: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  navigationBar: {
    backgroundColor: colors.red,
  },
  scheduleListContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
});

export class ScheduleList extends Component {
  constructor(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(SCHEDULE_LIST),
    };
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(item) {
    return (
      <ScheduleListItem item={item} navigator={this.props.navigator} />
    );
  }

  render() {
    return (
      <View style={styles.scheduleContainer}>
        <NavigationBar
          title={{ title: 'Schedule', tintColor: colors.white }}
          style={styles.navigationBar}
        />
        <ListView
          contentContainerStyle={styles.scheduleListContainer}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

ScheduleList.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};
