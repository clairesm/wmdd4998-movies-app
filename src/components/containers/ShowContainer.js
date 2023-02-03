import { Center, Image, Text } from 'native-base';
import { useState, useEffect } from 'react';
import {
  getMovieDetails,
  getTvDetails,
} from '../services/api';

const ShowContainer = ({ navigation, route, props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({});
  const { id, type } = route.params;

  useEffect(() => {
    console.log('Running effect');
    const fetchData = async () => {
      setIsLoading(true);

      let response;
      if (type === 'movie') {
        response = await getMovieDetails(id);
      } else if (type === 'tv') {
        response = await getTvDetails(id);
      }

      console.log('Got response>>>', response);

      setDetails(response);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return <Text>Hello</Text>;
  //     <Center>
  // {details.poster_path ? (
  // <Image
  // source={{
  // uri: https://image.tmdb.org/t/p/w500/${details.poster_path},
  // }},
  // alt='Alternate text'
  // size='2xl'
  // margin='auto'
  // />
  // ) : null}>
  // <Text>{details.title || details.name || "Title not found"}</Text>
  // <Text>{details.overview || "Overview not found"}</Text>
  // <Text>Popularity: {details.popularity || "Popularity not found"}</Text>
  // <Text>Release Date: {details.release_date || "Release date not found"}</Text>
  // </Center>
};

export default ShowContainer;
