import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';

import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
  FormControl,
  HStack,
  Input,
  VStack,
  Button,
  Icon,
  WarningOutlineIcon,
} from 'native-base';

import { Ionicons } from '@expo/vector-icons';

const Form = (props) => {
  const { onInputChange, onValueChange, onSubmit } = props;
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <VStack space={2} width='100%' py={5}>
      <FormControl isRequired isInvalid>
        <FormControl.Label fontSize='sm'>
          Search Movie/TV Show Name
        </FormControl.Label>
        <Input
          placeholder='i.e. James Bond, CSI'
          variant='filled'
          bg='gray.200'
          px={3}
          width='85%'
          InputLeftElement={
            <Icon
              size={5}
              ml={2}
              color='gray.400'
              as={<Ionicons name='ios-search' />}
            />
          }
          onChangeText={(value) => {
            onInputChange(value);
            setFormData({ ...formData, name: value });
          }}
        />

        <FormControl.Label fontSize='sm' py={3}>
          Choose Search Type
        </FormControl.Label>
        <HStack width='100%' space={2} alignItems='center'>
          <Box maxW='300'>
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
              // onValueChange={(itemValue) => {
              //   onValueChange(itemValue);
              //   setSelectedFilter({
              //     ...selectedFilter,
              //     name: itemValue,
              //   });
              // }}
              onValueChange={(itemValue) => {
                onValueChange(itemValue);
                setSelectedFilter(itemValue);
              }}
            >
              <Select.Item
                label='Movie'
                value='searchMovie'
              />
              <Select.Item
                label='Multi'
                value='searchMulti'
              />
              <Select.Item label='TV' value='searchTv' />
            </Select>
            {/* <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size='xs' />}
            >
              Please make a selection!
            </FormControl.ErrorMessage> */}
          </Box>

          <Button
            onPress={onSubmit}
            startIcon={
              <Icon as={Ionicons} name='ios-search' />
            }
          >
            Search
          </Button>
        </HStack>
      </FormControl>
    </VStack>
  );
};

export default Form;
