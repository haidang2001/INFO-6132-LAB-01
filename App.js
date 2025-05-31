import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import HeaderTab from './HeaderTab';
import GridButton from './GridButton';
import PlaylistCard from './PlaylistCard';
import AudiobookCard from './AudiobookCard';
import React, { useState } from 'react';

export default function App() {

  return (
    <View style={{ flex: 1, backgroundColor: 'black', paddingTop: 30 }}>
      {/* Fixed Header */}
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 10 }}>
        <Image source={require('./assets/apple-logo.png')} style={{ width: 30, height: 30 }} />
        <View style={{ flexDirection: 'row', gap: 10, }}>
          <HeaderTab label="All" isActive={true} />
          <HeaderTab label="Music" isActive={false} />
          <HeaderTab label="Podcasts" isActive={false} />
          <HeaderTab label="Audiobooks" isActive={false} />
        </View>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
        {/* Top Grid Buttons */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 }}>
          {[
            'Hot Hits Canada', 'Pop Favourites',
            'Hip-Hop Central', '80s Hard Rock',
            'All About Country', 'Upbeat mix',
            'Daily Wellness', 'Release Radar'
          ].map((title, index) => (
            <GridButton
              key={index}
              title={title}
              icon={require('./assets/music-note.png')}
            />
          ))}
        </View>

        {/* Recents Section */}
        <Text style={styles.sectionTitle}>Recents</Text>
        <View style={styles.recentGrid}>
          {[
            'Pop mix', 'Hot Hits', 'Upbeat Mix',
            'Daily Wellness', 'Hip-Hop Central', '80s Hard Rock'
          ].map((title, index) => (
            <PlaylistCard
              key={index}
              title={title}
              image={require('./assets/playlist-cover.png')}
            />
          ))}
        </View>

        {/* Audiobooks Section */}
        <Text style={styles.sectionTitle}>Audiobooks for you</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 40 }}>
          {[
            { title: 'Mastering Conversation...', author: 'Helen Stone' },
            { title: 'Focus Fast', author: 'John Doe' },
            { title: 'Mind Reset', author: 'Jane Roe' },
          ].map((item, index) => (
            <AudiobookCard
              key={index}
              title={item.title}
              author={item.author}
              image={require('./assets/audiobook-icon.png')}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  recentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});