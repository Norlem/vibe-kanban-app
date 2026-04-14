import { useQuery } from '@tanstack/react-query';

export function useDiscordOnlineCount() {
  return useQuery({
    queryKey: ['discord-online-count'],
    queryFn: () => Promise.resolve(null as number | null),
    enabled: false,
  });
}
