import React, { useState } from 'react';
import MovieDropDown from '../forms/MovieDropDown';
import AllResultsList from '../list/AllResultsList';
import { getMovies } from '../services/api';
import Loading from '../layout/Loading';
import { VStack } from 'native-base';

const MoviesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieFilter, setMovieFilter] = useState(null);
  const [results, setResults] = useState([]);

  const handleValueChange = (movieFilter) => {
    setIsLoading(true);
    setMovieFilter(movieFilter);
    getMovies(movieFilter).then(
      (res) => {
        setResults(res);
        setIsLoading(false);
      },
      (err) => console.log(err)
    );
  };
  console.log('Movie Filter:', movieFilter);

  return (
    <VStack>
      <MovieDropDown onValueChange={handleValueChange} />
      {isLoading ? (
        <Loading />
      ) : (
        <AllResultsList
          results={results}
          navigation={navigation}
        />
      )}
    </VStack>
  );
};
export default MoviesContainer;
