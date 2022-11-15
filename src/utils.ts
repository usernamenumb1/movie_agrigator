/* eslint-disable import/prefer-default-export */
import { FetchedSingleMovie } from "./interfaces";

export const transformSingleMovieResponse = (responseData: FetchedSingleMovie) => ({
  backdropPath: responseData.backdrop_path,
  budget: responseData.budget,
  revenue: responseData.revenue,
  genres: responseData.genres.map(({ name }: { name: string }) => name),
  title: responseData.title,
  review: responseData.overview,
  status: responseData.status,
  posterPath: responseData.poster_path,
  tagline: responseData.tagline,
  voteAverage: Math.round(responseData.vote_average * 10) / 10,
});
