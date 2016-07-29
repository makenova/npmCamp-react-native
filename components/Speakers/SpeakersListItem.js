import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  speakerListItemContainer: {
    marginBottom: 15,
  },
  speakerImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  speakerName: {
    color: 'white',
    fontFamily: 'Helvetica-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const SpeakersListItem = ({ item, navigator }) => {
  function renderSpeaker(speaker) {
    navigator.push({
      sceneTitle: 'speaker',
      speaker,
    });
  }

  return (
    <TouchableOpacity
      onPress={() => renderSpeaker(item)}
    >
      <View style={styles.speakerListItemContainer}>
        <Image style={styles.speakerImage} source={item.image} />
        <Text style={styles.speakerName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

SpeakersListItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};

export default SpeakersListItem;
