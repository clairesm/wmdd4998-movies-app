import React from 'react';
import TvDropDown from '../forms/TvDropDown';
import { useState } from 'react';
import { getTv } from '../services/api';
import { Center, Container } from 'native-base';
import AllResultsList from '../list/AllResultsList';
import Loading from '../layout/Loading';

const TvShowsContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tvFilter, setTvFilter] = useState(null);
  const [results, setResults] = useState([]);

  const handleValueChange = (tvFilter) => {
    setIsLoading(true);
    setTvFilter(tvFilter);
    getTv(tvFilter).then(
      (res) => {
        console.log('TvShowsContainer, res >>>', res);
        setResults(res);
        setIsLoading(false);
      },
      (err) => console.log(err)
    );
  };
  console.log('TV Filter:', tvFilter);

  return (
    <Container>
      <Center>
        <TvDropDown onValueChange={handleValueChange} />
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

export default TvShowsContainer;
