import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Center } from 'native-base';
import Form from '../forms/Form';

const SearchesContainer = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchFilter, setSearchFilter] = useState(null);
  const [results, setResults] = useState([]);

  const handleSubmittedQuery = (
    searchQuery,
    searchFilter
  ) => {
    setIsLoading(true);
    setSearchQuery(searchQuery) &&
      setSearchFilter(searchFilter);
    getSearchResult(searchQuery, searchFilter).then(
      (res) => {
        console.log('SearchResultContainer, res >>>', res);
        setResults(res);
        setIsLoading(false);
      },
      (err) => console.log(err)
    );
  };
  console.log('Search Query:', searchQuery, searchFilter);

  return (
    <Center>
      <Center>
        <Form onSubmit={handleSubmittedQuery} />
      </Center>
    </Center>
  );
};

export default SearchesContainer;
