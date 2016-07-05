import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { colors } from './constants';
import { SPEAKER_LIST } from './speakers.db';

const styles = StyleSheet.create({
  scheduleListItemContainer: {
    marginBottom: 15,
    flexDirection: 'row',
  },
  scheduleTime: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
  },
  scheduleTitleSpeaker: {
    flex: 1,
    flexDirection: 'column',
  },
  scheduleText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 18,
  },
});

export const ScheduleListItem = ({ item, navigator }) => {
  function renderScheduleItem(scheduleItem) {
    const speakerArray = SPEAKER_LIST.filter(
      speaker => scheduleItem.speakers.some(
        scheduleSpeaker => scheduleSpeaker === speaker.name
      )
    );

    switch (speakerArray.length) {
      case 0:
        break;
      case 1:
        navigator.push({
          sceneTitle: 'speaker',
          speaker: speakerArray[0],
        });
        break;
      default:
        navigator.push({
          sceneTitle: 'schedule',
          item: scheduleItem,
        });
        break;
    }
  }

  function renderSpeakers(speakers) {
    return speakers ? item.speakers.join(',') : '';
  }

  function getEventColor(eventType) {
    switch (eventType) {
      case 'event':
        return { backgroundColor: colors.blue };
      case 'section':
        return { backgroundColor: colors.red };
      case 'lightning':
        return { backgroundColor: colors.yellow };
      default:
        return { backgroundColor: colors.white };
    }
  }

  return (
    <TouchableOpacity
      onPress={() => renderScheduleItem(item)}
    >
      <View style={[styles.scheduleListItemContainer, getEventColor(item.type)]}>
        <View style={styles.scheduleTime}>
          <Text style={styles.scheduleText}>{item.start}</Text>
          <Text style={styles.scheduleText}>{item.end}</Text>
        </View>
        <View style={styles.scheduleTitleSpeaker}>
          <Text style={styles.scheduleText}>{item.title}</Text>
          <Text style={styles.scheduleText}>{renderSpeakers(item.speakers)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ScheduleListItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};
