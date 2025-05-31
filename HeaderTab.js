// HeaderTab.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderTab = ({ label, isActive }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
      style={[
        styles.tab,
        isActive ? styles.active : styles.inactive,
        isPressed && { backgroundColor: '#111' }
      ]}
    >
      <Text style={styles.tabText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginLeft: 5,
  },
  active: {
    backgroundColor: 'green',
  },
  inactive: {
    backgroundColor: '#333',
    
  },
  tabText: {
    color: 'white',
  },
});

export default HeaderTab;
