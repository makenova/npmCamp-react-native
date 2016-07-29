import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
    paddingTop: 60,
  },
  speakerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
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

const Speaker = ({ speaker, navigator }) =>
  <View style={styles.container}>
    <View style={styles.speakerContainer}>
      <Image source={speaker.image} style={styles.speakerImage} />
      <Text style={styles.speakerBio}>{speaker.name}</Text>
    </View>
  </View>;

Speaker.propTypes = {
  speaker: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};

export default Speaker;
