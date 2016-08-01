import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal,
  },
  scroll: {
    marginTop: 60,
    marginBottom: 40,
    paddingTop: 20,
    paddingBottom: 60,
    alignItems: 'center',
    paddingVertical: 10,
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

const Speaker = ({ speaker }) =>
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scroll}>
      <Image source={speaker.image} style={styles.speakerImage} />
      <Text style={styles.speakerBio}>{speaker.name}</Text>
    </ScrollView>
  </View>;

Speaker.propTypes = {
  speaker: React.PropTypes.object.isRequired,
};

export default Speaker;
