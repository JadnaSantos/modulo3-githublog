import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Posts } from '../../components/Posts/Posts';
import { ProfileContext } from '../../context/ProfileContext';
import { BlogContainer, Publications, PublicationsContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Profile } from '../../components/Profile';

const searchIssueSchema = zod.object({
  query: zod.string(),
});

type SearchIssueInput = zod.infer<typeof searchIssueSchema>;

export function Home() {
  const { totalCount, loadIssues } = useContext(ProfileContext);
  const { register, handleSubmit } = useForm<SearchIssueInput>({
    resolver: zodResolver(searchIssueSchema),
  });

  async function handleSearchIssue(data: SearchIssueInput) {
    await loadIssues(data.query);
  }

  return (
    <BlogContainer>
      <Profile />

      <PublicationsContainer onSubmit={handleSubmit(handleSearchIssue)}>
        <Publications>
          <strong>Publicações</strong>
          <span>{totalCount} publicações</span>
        </Publications>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </PublicationsContainer>

      <Posts />
    </BlogContainer>
  );
}
