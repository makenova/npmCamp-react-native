import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  navigationBar: {
    backgroundColor: colors.red,
  },
  navigatorText: {
    fontFamily: 'Helvetica-Bold',
  },
  speakerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 10,
  },
  speakerImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  speakerBio: {
    color: colors.white,
    fontSize: 20,
  },
});

export const Speaker = ({ speaker, navigator }) =>
  <View style={styles.container}>
    <NavigationBar
      title={{ title: speaker.name, tintColor: colors.white }}
      style={styles.navigationBar}
      leftButton={{
        title: 'Back',
        tintColor: colors.yellow,
        handler: navigator.pop,
      }}
    />
    <View style={styles.speakerContainer}>
      <Image source={speaker.image} style={styles.speakerImage} />
      <Text style={styles.speakerBio}>{speaker.name}</Text>
    </View>
  </View>;

Speaker.propTypes = {
  speaker: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};
