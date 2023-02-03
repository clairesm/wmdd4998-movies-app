import { FlatList, View } from 'native-base';
import AllResultsCard from '../listitems/AllResultsCard';

const AllResultsList = ({ navigation, results }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500';

  const resultlist = results.results;
  console.log(resultlist);

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
          overview={item.overview}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default AllResultsList;
