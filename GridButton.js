import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GridButton = ({ title, icon }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      style={[
        styles.gridButton,
        isPressed && { backgroundColor: '#222' } 
      ]}
    >
      <Image source={icon} style={styles.icon} />
      <Text style={styles.gridText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    gridButton: {
      width: '48%',
      backgroundColor: '#444',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginBottom: 10,
      borderRadius: 8,
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    gridText: {
      color: 'white',
      flexShrink: 1,
    },
  });
  
  export default GridButton