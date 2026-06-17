import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import { colors } from '../theme/colors';
type uni = {
  university: string;
  country: string;
  description: string;
};
const ListItem = ({ university, country, description }: uni) => {
  const { width } = useWindowDimensions();
  const isWide = width >= 600;

  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={2}>
        University : {university}
      </Text>
      <Text style={styles.text}>Country : {country}</Text>
      <Text style={styles.text} numberOfLines={isWide ? 3 : 2}>
        about : {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  text: {
    flexShrink: 1,
    fontSize: 14,
    color: colors.text,
  },
});

export default ListItem;
