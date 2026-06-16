import { View, Text } from 'react-native';
import React from 'react';
type uni = {
  // id: number;
  university: string;
  country: string;
  description: string;
};
const ListItem = ({ university, country, description }: uni) => {
  return (
    <View>
      <Text>University : {university}</Text>
      <Text>Country : {country}</Text>
      <Text>about : {description}</Text>
    </View>
  );
};

export default ListItem;
