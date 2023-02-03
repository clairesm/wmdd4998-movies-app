import { FlatList, View } from 'native-base';
import AllResultsCard from '../listitems/AllResultsCard';
import ShowContainer from '../containers/ShowContainer';

const AllResultsList = ({ navigation, results }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  // const movieArray = results.results;
  // console.log(
  //   'MovieList, results.results.length >> ',
  //   results.results.length
  // );
  // console.log(results);

  const resultlist = results.results;

  return (
    <View>
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

      <FlatList
        data={resultlist}
        renderItem={({ item }) => (
          <ShowContainer
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
    </View>
  );
};

export default AllResultsList;
