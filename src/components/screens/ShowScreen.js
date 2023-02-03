import ShowContainer from '../containers/ShowContainer';

const ShowScreen = ({ navigation, route }) => {
  const { id } = route.params;
  return (
    <ShowContainer
      navigation={navigation}
      id={id}
      route={route}
      //route is the Show, label, url in ShowScreen
    />
  );
};

export default ShowScreen;
