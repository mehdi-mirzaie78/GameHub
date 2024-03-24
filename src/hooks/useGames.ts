import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchedResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchedResponse<Game>, Error>({
    queryKey:
      gameQuery.genre ||
      gameQuery.platform ||
      gameQuery.searchText ||
      gameQuery.sortOrder
        ? ["games", gameQuery]
        : ["games"],
    queryFn: () =>
      apiClient
        .get<FetchedResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

export default useGames;
