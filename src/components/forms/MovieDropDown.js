import React from 'react';
import { useState } from 'react';
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';

const MovieDropDown = (props) => {
  const { onValueChange } = props;
  const [selectedFilter, setSelectedFilter] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <Center>
      {/* <Box maxW='300'> */}
      <Select
        selectedValue={selectedFilter}
        minWidth='200'
        accessibilityLabel='Select a Filter'
        placeholder='Select a Filter'
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size='5' />,
        }}
        mt={1}
        onValueChange={(itemValue) => {
          onValueChange(itemValue);
          setSelectedFilter(itemValue);
        }}
      >
        <Select.Item
          label='Now Playing'
          value='moviesNowPlaying'
        />
        <Select.Item
          label='Popular'
          value='moviesPopular'
        />
        <Select.Item
          label='Top Rated'
          value='moviesTopRated'
        />
        <Select.Item
          label='Upcoming'
          value='moviesUpcoming'
        />
      </Select>
      {/* </Box> */}
    </Center>
  );
};

export default MovieDropDown;
