import React from 'react';
import { Navigator } from 'react-native';
import { ScheduleList } from './ScheduleList';
import { Schedule } from './Schedule';
import { Speaker } from './Speaker';

export const ScheduleNav = () => {
  function renderScene(scene, navigator) {
    switch (scene.sceneTitle) {
      case 'speaker':
        return <Speaker navigator={navigator} speaker={scene.speaker} />;
      case 'schedule':
        return <Schedule navigator={navigator} item={scene.scheduleItem} />;
      case 'scheduleList':
      default:
        return <ScheduleList navigator={navigator} />;

    }
  }

  return (
    <Navigator
      style={{ flex: 1 }}
      initialRoute={{ title: 'Schedule', sceneTitle: 'scheduleList' }}
      renderScene={renderScene}
    />
  );
};
