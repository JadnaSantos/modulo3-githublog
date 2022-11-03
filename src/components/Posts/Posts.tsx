import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { ProfileContext } from '../../context/ProfileContext';
import { SearchedPost } from '../SearchedPost';
import { PostsContainer } from './styles';

export function Posts() {
  const { issues } = useContext(ProfileContext);
  return (
    <PostsContainer>
      {issues.map(issue => (
        <SearchedPost
          key={String(issue.id)}
          id={issue.id}
          title={issue.title}
          body={<ReactMarkdown children={issue.body} />}
          created_at={issue.created_at}
        />
      ))}
    </PostsContainer>
  );
}
