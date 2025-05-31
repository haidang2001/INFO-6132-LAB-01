// PlaylistCard.js
import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const PlaylistCard = ({ title, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      style={styles.card}
    >
      <ImageBackground
        source={image}
        style={[styles.image, isPressed && { opacity: 0.6 }]}
        imageStyle={{ borderRadius: 8 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <Text style={styles.subText}>Playlist</Text>
        <Text style={styles.subText}>User 1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '32%',
    marginBottom: 15,
    backgroundColor: 'rgba(127, 120, 120, 0.5)',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  overlayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    padding: 4,
  },
  subText: {
    color: 'white',
    fontSize: 12,
  },
});

export default PlaylistCard;
