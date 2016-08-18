import React from 'react';
import { ListView, StyleSheet, View } from 'react-native';
import SpeakersListItem from './SpeakersListItem';
import SPEAKER_LIST from '../../speakers.db';
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

const SpeakersList = ({ speakers = SPEAKER_LIST, navigator }) => {
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });

  function renderRow(speaker) {
    return (<SpeakersListItem item={speaker} navigator={navigator} />);
  }

  return (
    <View style={styles.speakersContainer}>
      <ListView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.speakersListContainer}
        dataSource={dataSource.cloneWithRows(speakers)}
        renderRow={renderRow}
      />
    </View>
  );
};

SpeakersList.propTypes = {
  navigator: React.PropTypes.object.isRequired,
  speakers: React.PropTypes.array,
};

export default SpeakersList;
