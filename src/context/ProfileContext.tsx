import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Blog {
  id: number;
  number: number;
  body: string;
  title: string;
  created_at: string;
  comments: string;
  updated_at: number;
}

interface Profile {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  followers: string;
  created_at: string;
  updated_at: string;
}

interface ProfileContextProps {
  profiles: Profile;
  issues: Blog[];
  totalCount: number;
  loadIssues: (query?: string) => Promise<void>;
}

interface ProfileProviderContext {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextProps);

export function ProfileProvider({ children }: ProfileProviderContext) {
  const [profiles, setProfiles] = useState({} as Profile);
  const [issues, setIssues] = useState<Blog[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  const loadProfile = async () => {
    const response = await api.get(`/users/JadnaSantos`);

    setProfiles(response.data);
  };

  //https://github.com/JadnaSantos/reactHooks

  const loadIssues = async (query = '') => {
    const response = await api.get(
      `search/issues?q=${query}repo:JadnaSantos/reactHooks`,
    );
    const normalizeIssues = response.data.items.map((item: Blog) => {
      return {
        id: item.number,
        body: item.body,
        title: item.title,
        created_at: item.created_at,
        updated_at: item.updated_at,
        comments: item.comments,
      };
    });
    setIssues(normalizeIssues);
    setTotalCount(response.data.total_count);
  };

  useEffect(() => {
    loadProfile();
    loadIssues();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        issues,
        totalCount,
        loadIssues,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
