import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

const videos = [
  { id: 1, title: 'Видео 1', uri: 'https://easy4.ru/test.mp4' },
  { id: 2, title: 'Видео 2', uri: 'https://easy4.ru/test2.mp4' },
  { id: 3, title: 'Видео 3', uri: 'https://easy4.ru/test.mp4'  },
  { id: 4, title: 'Видео 4', uri: 'https://easy4.ru/test2.mp4' },
  { id: 5, title: 'Видео 5', uri: 'https://easy4.ru/test2.mp4' },
  { id: 6, title: 'Видео 6', uri: 'https://easy4.ru/test2.mp4' },
  { id: 7, title: 'Видео 7', uri: 'https://easy4.ru/test2.mp4' },
  { id: 8, title: 'Видео 8', uri: 'https://easy4.ru/test2.mp4' },
  { id: 9, title: 'Видео 9', uri: 'https://easy4.ru/test2.mp4' },
  { id: 10, title: 'Видео 10', uri: 'https://easy4.ru/test.mp4' },
  { id: 11, title: 'Видео 11', uri: 'https://easy4.ru/test.mp4' },
  { id: 12, title: 'Видео 12', uri: 'https://easy4.ru/test.mp4' },
  { id: 13, title: 'Видео 13', uri: 'https://easy4.ru/test2.mp4' },
  { id: 14, title: 'Видео 14', uri: 'https://easy4.ru/test.mp4' },
  { id: 15, title: 'Видео 15', uri: 'https://easy4.ru/test.mp4' },
];

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedVideo(item)}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      {selectedVideo && (
        <Video
          source={{ uri: selectedVideo.uri }}
          style={{ height: 300 }}
          useNativeControls
          resizeMode="contain"
        />
      )}
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default App;
