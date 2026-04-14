import { useQuery } from '@tanstack/react-query';

export function useGitHubStars() {
  return useQuery({
    queryKey: ['github-stars'],
    queryFn: () => Promise.resolve(null as number | null),
    enabled: false,
  });
}
