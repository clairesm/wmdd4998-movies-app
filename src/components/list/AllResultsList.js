import React from 'react';
import { FlatList } from 'native-base';
import AllResultsCard from '../listitems/AllResultsCard';

const AllResultsList = ({ navigation, results }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  // const movieArray = results.results;
  // console.log(
  //   'MovieList, results.results.length >> ',
  //   results.results.length
  // );
  console.log(results);

  const resultlist = results.results;

  return (
    <FlatList
      data={resultlist}
      renderItem={({ item }) => (
        <AllResultsCard
          id={item.id}
          image={imageUrl + item.poster_path}
          name={item.name}
          title={item.title}
          popularity={item.popularity}
          releaseDate={item.release_date}
          navigation={navigation}
        />
      )}
    />
  );
};

export default AllResultsList;
