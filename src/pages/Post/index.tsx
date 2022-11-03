/* eslint-disable prettier/prettier */
import { Footer, LinksMenu, PostContainer, PostProfile } from './styles'
import {
  faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useParams } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../../context/ProfileContext'
import { dateFormatter } from '../../utils/Formatter'
import { PostContent } from './components/PostContent'
import { api } from '../../services/api'

interface InPost {
  id: number
  number: number
  body: string
  title: string
  comments: string
  created_at: string
}


export function Post() {
  const [posts, setPosts] = useState({} as InPost)
  const { profiles } = useContext(ProfileContext)
  const { id } = useParams()

  const formattedDate = dateFormatter(posts.created_at)

  async function inPost() {
    const response = await api.get(`/repos/JadnaSantos/re/issues/${id}`)
    setPosts(response.data)
  }

  useEffect(() => {
    inPost()
  }, [])

  return (
    <PostContainer>
      <PostProfile>
        <LinksMenu>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </NavLink>
          <a href={`https://github.com/JadnaSantos${id}`} target={'_blank'}>
            Ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </LinksMenu>

        <strong>{posts.title}</strong>

        <Footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profiles.name}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formattedDate}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {posts.comments} comentários
          </span>
        </Footer>

      </PostProfile>
      <PostContent content={posts.body} />
    </PostContainer>

  )
}
