import React from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  VStack,
  Image,
  Text,
  HStack,
} from 'native-base';
import { useState, useEffect } from 'react';

const ShowContainer = (props) => {
  const {
    id,
    image,
    title,
    popularity,
    releaseDate,
    navigation,
    name,
    overview,
  } = props;

  console.log(id);
  return (
    <Center>
      <VStack width='100%' p='10'>
        <Heading size='xs' mb={5} textAlign='center'>
          {title || name}
        </Heading>
        <Image
          alt='{title} {name}'
          source={{ uri: image }}
          size={'xl'}
        />
        <Text my={5}>{overview}</Text>
        <Text fontSize='xs'>
          Popularity: {popularity} | Release Date:{' '}
          {releaseDate}
        </Text>
      </VStack>
    </Center>
  );
};

export default ShowContainer;
