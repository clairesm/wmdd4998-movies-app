import React from 'react';
import { useState } from 'react';
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';

const TvDropDown = (props) => {
  const { onValueChange } = props;
  const [selectedFilter, setSelectedFilter] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <Center>
      <Box maxW='300'>
        <Select
          selectedValue={selectedFilter}
          minWidth='200'
          accessibilityLabel='Select a Filter'
          placeholder='Select a Filter'
          defaultValue='tvPopular'
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
            label='Airing Today'
            value='tvToday'
          />
          <Select.Item label='On Air' value='tvOnAir' />
          <Select.Item label='Popular' value='tvPopular' />
          <Select.Item
            label='Top Rated'
            value='tvTopRated'
          />
        </Select>
      </Box>
    </Center>
  );
};

export default TvDropDown;
