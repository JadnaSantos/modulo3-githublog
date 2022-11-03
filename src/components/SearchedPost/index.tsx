import { ReactNode } from 'react-markdown/lib/react-markdown';
import { NavLink } from 'react-router-dom';
import { dateFormatter } from '../../utils/Formatter';
import { PostHeader, PostPublication } from './styles';

interface ResearchedPost {
  id: number;
  title: string;
  body: string | ReactNode;
  created_at: string;
}

export function SearchedPost({ id, title, body, created_at }: ResearchedPost) {
  const formattedDate = dateFormatter(created_at);

  return (
    <>
      <NavLink to={`/issue/${id}`}>
        <PostPublication key={id}>
          <PostHeader>
            <strong>{title}</strong>
            <span>{formattedDate}</span>
          </PostHeader>
          <p>{body}</p>
        </PostPublication>
      </NavLink>
    </>
  );
}
