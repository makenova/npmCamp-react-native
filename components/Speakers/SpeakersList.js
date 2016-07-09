import React, { Component } from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import { SpeakersListItem } from './SpeakersListItem';
import { SPEAKER_LIST } from '../../speakers.db';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  speakersContainer: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  speakersListContainer: {
    marginTop: 60,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
});

export class SpeakersList extends Component {
  constructor(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(this.props.speakers || SPEAKER_LIST),
    };
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(speaker) {
    return (
      <SpeakersListItem item={speaker} navigator={this.props.navigator} />
    );
  }

  render() {
    return (
      <View style={styles.speakersContainer}>
        <ListView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.speakersListContainer}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

SpeakersList.propTypes = {
  navigator: React.PropTypes.object.isRequired,
  speakers: React.PropTypes.array,
};
