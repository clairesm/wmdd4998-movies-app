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
import ShowContainer from '../containers/ShowContainer';

const AllResultsCard = (props) => {
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

  console.log('MovieCard, id >>', id);

  return (
    <Box>
      <HStack pl={3} my={2} pr={6} alignItems='center'>
        <Image
          alt='{title} {name}'
          source={{ uri: image }}
          size={'xl'}
        />

        <VStack width='100%' px={2} flex={1}>
          <Heading size='xs'>{title || name}</Heading>
          <Text>Popularity: {popularity}</Text>
          <Text>Date: {releaseDate}</Text>
          <Button
            onPress={() => {
              navigation.navigate('Show', { id: id });
            }}
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AllResultsCard;
