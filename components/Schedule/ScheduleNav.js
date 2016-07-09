import React from 'react';
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScheduleList } from './ScheduleList';
import { Schedule } from './Schedule';
import { Speaker } from '../Speakers/Speaker';
import { SpeakersList } from '../Speakers/SpeakersList';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.red,
  },
  navBarLeftButton: {
    marginLeft: 10,
    // increase touch target
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  navBarText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.white,
  },
});

export const ScheduleNav = () => {
  function renderScene(scene, navigator) {
    switch (scene.sceneTitle) {
      case 'speaker':
        return <Speaker navigator={navigator} speaker={scene.speaker} />;
      case 'schedule':
        return <Schedule navigator={navigator} item={scene.item} />;
      case 'speakerList':
        return <SpeakersList navigator={navigator} speakers={scene.speakers} />;
      case 'scheduleList':
      default:
        return <ScheduleList navigator={navigator} />;
    }
  }

  const NavigationBarRouteMapper = {
    LeftButton: (route, navigator, index) => {
      if (index === 0) return null;
      return (
        <TouchableOpacity onPress={navigator.pop} >
          <View style={styles.navBarLeftButton} >
            <Text style={styles.navBarText}>Back</Text>
          </View>
        </TouchableOpacity>
      );
    },
    RightButton: () => null,
    Title: (route) =>
      <Text style={styles.navBarText}>{route.title}</Text>,
  };

  return (
    <Navigator
      navigationBar={
        <Navigator.NavigationBar
          routeMapper={NavigationBarRouteMapper}
          style={styles.navBar}
        />
      }
      style={{ flex: 1 }}
      initialRoute={{ title: 'Schedule', sceneTitle: 'scheduleList' }}
      renderScene={renderScene}
    />
  );
};
