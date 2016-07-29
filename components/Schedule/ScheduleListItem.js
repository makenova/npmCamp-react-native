import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants';
import SPEAKER_LIST from '../../speakers.db';

const styles = StyleSheet.create({
  scheduleListItemContainer: {},
  colorbar: {
    height: 15,
  },
  scheduleListItem: {
    flexDirection: 'row',
    marginBottom: 15,
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.lightgray,
  },
  scheduleTime: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scheduleTitleSpeaker: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
  },
  time: {},
  startTime: {},
  endTime: {},
  scheduleTitle: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  scheduleAuthors: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  chathead: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  scheduleText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 18,
  },
});

const ScheduleListItem = ({ item, navigator }) => {
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
          sceneTitle: 'speakerList',
          speakers: speakerArray,
        });
        break;
    }
  }

  function renderSpeakers(speakers) {
    return speakers.map((speaker, index) => {
      const speakerObj = SPEAKER_LIST.filter(speakerListObj =>
        speakerListObj.name === speaker
      )[0];

      if (!speakerObj) return (<Text key={index}>{speaker}</Text>);

      return (<Image
        key={index}
        source={speakerObj.image}
        style={styles.chathead}
      />);
    });
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
        return { backgroundColor: colors.purple };
    }
  }

  return (
    <TouchableOpacity onPress={() => renderScheduleItem(item)}>
      <View style={styles.scheduleListItemContainer}>
        <View
          style={[
            styles.colorbar,
            getEventColor(item.type),
          ]}
        />
        <View style={styles.scheduleListItem}>
          <View style={styles.scheduleTime}>
            <Text style={[styles.scheduleText, styles.time, styles.startTime]}>
              {item.start}
            </Text>
            <Text style={[styles.scheduleText, styles.time, styles.endTime]}>
              {item.end}
            </Text>
          </View>
          <View style={styles.scheduleTitleSpeaker}>
            <View style={styles.scheduleTitle}>
              <Text style={styles.scheduleText}>{item.title}</Text>
            </View>
            <View style={styles.scheduleAuthors}>
              {renderSpeakers(item.speakers)}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ScheduleListItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};

export default ScheduleListItem;
