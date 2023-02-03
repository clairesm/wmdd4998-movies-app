import React from 'react';
import {
  Button,
  Center,
  Heading,
  VStack,
  Image,
  Text,
  HStack,
} from 'native-base';

const AllResultsCard = (props) => {
  const {
    id,
    image,
    title,
    popularity,
    releaseDate,
    navigation,
    name,
    label,
    uri,
  } = props;

  console.log('MovieCard, id >>', id);

  return (
    // <></>

    <HStack space={3} justifyContent='center' m={1.5}>
      <Center>
        <Image
          alt='{title} {name}'
          source={{ uri: image }}
          size={'xl'}
        />
      </Center>
      <Center>
        <Heading size='xs'>
          {title} {name}
        </Heading>
        <Text>Popularity: {popularity}</Text>
        <Text>Date: {releaseDate}</Text>
        <Button
          onPress={() => {
            navigation.navigate('Show', { resultid: 'id' });
          }}
        >
          More Details
        </Button>
      </Center>
    </HStack>
  );
};

export default AllResultsCard;
