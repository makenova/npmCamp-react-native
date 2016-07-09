import React, { Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import { ScheduleListItem } from './ScheduleListItem';
import { SCHEDULE_LIST } from '../../schedule.db';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  scheduleContainer: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: colors.charcoal,
  },
  navigationBar: {
    backgroundColor: colors.red,
  },
  scheduleListContainer: {
    marginBottom: 10,
  },
});

export class ScheduleList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

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
        <ListView
          showsVerticalScrollIndicator={false}
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
