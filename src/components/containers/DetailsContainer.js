// import { View, Text } from 'react-native';
import React from 'react';
import { Box, Center, Text } from 'native-base';

const DetailsContainer = ({ navigation, route }) => {
  const { id } = route.params;
  return (
    <Box width='100%'>
      <Center py={10}>
        <Text>{id}</Text>
      </Center>
    </Box>
  );
};

export default DetailsContainer;
