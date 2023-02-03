// import { View, Text } from 'react-native';
import React from 'react';
import { Box, Center, Text } from 'native-base';

const ShowContainer = ({ navigation, route }) => {
  return (
    <Box width='100%'>
      <Center py={10}>
        <Text>{resultid}</Text>
      </Center>
    </Box>
  );
};

export default ShowContainer;
