import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { uniList } from '../utils/uniList';
import ListItem from '../components/ListItem';
type uni = {
  id: number;
  university: string;
  country: string;
  description: string;
  foundedYear: number;
  worldRanking: number;
};
// const DATA: uni = uniList;
export default function UniListScreen() {
  const [list, setList] = useState<uni[]>([]);
  useEffect(() => {
    setList(uniList.slice(0, 20));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <ListItem
              university={item.university}
              country={item.country}
              description={item.description}
            />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
    paddingTop: 44,
    padding: 5,
    marginBottom: 10,
  },
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
});
