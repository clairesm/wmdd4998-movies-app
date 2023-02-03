import React, { useEffect } from 'react';
import {
  APP_KEY,
  BASE_URL,
  PAGE,
  SEARCH_QUERY,
  MOVIES_NOW_PLAYING,
  MOVIES_TOP_RATED,
  MOVIES_UPCOMING,
  MOVIES_POPULAR,
  SEARCH_MOVIE,
  SEARCH_MULTI,
  SEARCH_TV,
  TV_TODAY,
  TV_ON_AIR,
  TV_POPULAR,
  TV_TOP_RATED,
} from '../config/api_config';

// ============ get movies
export const getMovies = async (movieFilter) => {
  const switchFilter = () => {
    switch (movieFilter) {
      case 'moviesNowPlaying':
        return MOVIES_NOW_PLAYING;
        break;
      case 'moviesPopular':
        console.log(MOVIES_POPULAR);
        return MOVIES_POPULAR;
        break;
      case 'moviesTopRated':
        return MOVIES_TOP_RATED;
        break;
      case 'moviesUpcoming':
        return MOVIES_UPCOMING;
        break;
      default:
        break;
    }
  };
  const getMovieFilter =
    BASE_URL + switchFilter() + APP_KEY + PAGE;

  console.log('getMovieFilter:', getMovieFilter);

  console.log('starting fetch Movie Filter');

  const result = await fetch(getMovieFilter)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('rejected', error);
    });

  return result;
};

// ============ get search result
export const getSearchResult = async (
  searchQuery,
  searchFilter
) => {
  const switchFilter = () => {
    switch (searchFilter) {
      case 'searchMovie':
        return SEARCH_MOVIE;
        break;
      case 'searchMulti':
        return SEARCH_MULTI;
        break;
      case 'searchTv':
        return SEARCH_TV;
        break;

      default:
        break;
    }
  };

  //sample: https://api.themoviedb.org/3/search/person?api_key=fdf9ecacda35df2a922fadeb7821710d&language=en-US&query=brad%20pitt&page=1&include_adult=false
  const query = SEARCH_QUERY + '';

  const getSearchFilter =
    BASE_URL + switchFilter() + APP_KEY + query + PAGE;

  console.log('getSearchFilter:', getSearchFilter);

  console.log('starting fetch SEARCH Filter');

  const searchResult = await fetch(getSearchFilter)
    .then((res) => {
      console.log('api, search res>>>', res.data);
      return res.json();
    })
    .then((data) => {
      console.log('api, search data>>>', data);
    })
    .catch((error) => {
      console.log('rejected', error);
    });
};

// ============ get TV
export const getTv = async (tvFilter) => {
  const switchFilter = () => {
    switch (tvFilter) {
      case 'tvToday':
        return TV_TODAY;
        break;
      case 'tvOnAir':
        return TV_ON_AIR;
        break;
      case 'tvPopular':
        return TV_POPULAR;
        break;
      case 'tvTopRated':
        return TV_TOP_RATED;
        break;

      default:
        break;
    }
  };
  const getTvFilter =
    BASE_URL + switchFilter() + APP_KEY + PAGE;

  console.log('getTVFilter:', getTvFilter);

  console.log('starting fetch TV Filter');

  const tvResults = await fetch(getTvFilter)
    .then((res) => {
      console.log('api, tv res >>', res.data);

      return res.json();
    })
    .then((data) => {
      console.log('api, tv data >>', data);
      return data;
    })
    .catch((error) => {
      console.log('rejected', error);
    });

  return tvResults;
};
