import {
  FlatList,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import { uniList } from '../utils/uniList';
import { sendList } from '../utils/uniList';
import ListItem from '../components/ListItem';
import { StackScreenProps } from '@react-navigation/stack';
import { uni, RootStackParamList } from '../navigation/navs';
import { colors } from '../theme/colors';

type props = StackScreenProps<RootStackParamList, 'List'>;

function getListContentStyle(width: number) {
  if (width < 400) {
    return styles.listContentSmall;
  }
  if (width < 600) {
    return styles.listContentMedium;
  }
  return styles.listContentLarge;
}

export default function UniListScreen({ navigation }: props) {
  const { width } = useWindowDimensions();
  const numColumns = width >= 600 ? 2 : 1;
  const listContentStyle = getListContentStyle(width);

  const [list, setList] = useState<uni[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 15;
  useEffect(() => {
    setList(sendList(1, pageSize));
  }, []);

  // here we use load function to load based on window of view
  const load = () => {
    const nextPage = page + 1;
    const nextList = sendList(nextPage, pageSize);

    if (nextList.length === 0) {
      return;
    }
    setList(prev => [...prev, ...nextList]);
    setPage(nextPage);
  };
  return (
    <View style={styles.container}>
      <FlatList
        key={numColumns}
        data={list}
        numColumns={numColumns}
        keyExtractor={item => item.worldRanking.toString()}
        columnWrapperStyle={numColumns > 1 ? styles.row : undefined}
        contentContainerStyle={listContentStyle}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, numColumns > 1 && styles.cardColumn]}
            onPress={() => navigation.navigate('Details', item)}
          >
            <ListItem
              university={item.university}
              country={item.country}
              description={item.description}
            />
          </Pressable>
        )}
        onEndReached={load}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    // paddingTop: 44,
    padding: 5,
    marginBottom: 10,
  },
  listContentSmall: {
    flexGrow: 1,
    padding: 12,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  listContentMedium: {
    flexGrow: 1,
    padding: 16,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  listContentLarge: {
    flexGrow: 1,
    padding: 24,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  row: {
    gap: 12,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardColumn: {
    flex: 1,
  },
});
