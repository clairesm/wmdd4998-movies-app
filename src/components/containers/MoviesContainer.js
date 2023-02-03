import React, { useState } from 'react';
import MovieDropDown from '../forms/MovieDropDown';
import AllResultsList from '../list/AllResultsList';
import { getMovies } from '../services/api';
import Loading from '../layout/Loading';
import { Center, Container } from 'native-base';

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
    <Container>
      <Center>
        <MovieDropDown onValueChange={handleValueChange} />
        {isLoading ? (
          <Loading />
        ) : (
          <AllResultsList
            results={results}
            navigation={navigation}
          />
        )}
      </Center>
    </Container>
  );
};
export default MoviesContainer;
