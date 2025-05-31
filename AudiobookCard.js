import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AudiobookCard = ({ image, title, author }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      style={[styles.card, isPressed && { opacity: 0.6 }]}
    >
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Image source={require('./assets/heart-icon.png')} style={styles.heartIcon} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.premiumText}>Included in Premium</Text>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: 'black',
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    backgroundColor: 'white',
    position: 'relative',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  heartIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 8,
    right: 8,
    borderRadius: 50,
  },
  footer: {
    backgroundColor: '#222',
    padding: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  premiumText: {
    color: 'limegreen',
    fontSize: 12,
    marginBottom: 2,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  author: {
    color: 'gray',
    fontSize: 12,
  },
});

export default AudiobookCard;
