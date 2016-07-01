import React from 'react';
import { Navigator } from 'react-native';
import { SpeakersList } from './SpeakersList';
import { Speaker } from './Speaker';

export const SpeakersNav = () => {
  function renderScene(scene, navigator) {
    switch (scene.sceneTitle) {
      case 'speaker':
        return <Speaker navigator={navigator} speaker={scene.speaker} />;
      case 'speakerList':
      default:
        return <SpeakersList navigator={navigator} />;

    }
  }

  return (
    <Navigator
      style={{ flex: 1 }}
      initialRoute={{ title: 'Speakers', sceneTitle: 'speakerList' }}
      renderScene={renderScene}
    />
  );
};
