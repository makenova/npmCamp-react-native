import React from 'react';
import {
  Navigator,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SpeakersList from './SpeakersList';
import Speaker from './Speaker';
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

const SpeakersContainer = () => {
  function renderScene(scene, navigator) {
    switch (scene.sceneTitle) {
      case 'speaker':
        return <Speaker navigator={navigator} speaker={scene.speaker} />;
      case 'speakerList':
      default:
        return <SpeakersList navigator={navigator} />;

    }
  }

  const NavBarRouteMapper = {
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
          routeMapper={NavBarRouteMapper}
          style={styles.navBar}
        />
      }
      style={{ flex: 1 }}
      initialRoute={{ title: 'Speakers', sceneTitle: 'speakerList' }}
      renderScene={renderScene}
    />
  );
};

export default SpeakersContainer;
