// import useData from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchedResponse } from "./useData";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery<FetchedResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchedResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
