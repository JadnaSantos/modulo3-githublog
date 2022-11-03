import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  Biography,
  Footer,
  ProfileCntent,
  ProfileContainer,
  Profiles,
} from './styles';
import { useContext } from 'react';
import { ProfileContext } from '../../context/ProfileContext';

export function Profile() {
  const { profiles } = useContext(ProfileContext);

  return (
    <ProfileContainer>
      <img src={profiles.avatar_url} alt="" />
      <ProfileCntent>
        <Profiles>
          <strong>{profiles.name}</strong>
          <a
            href="https://github.com/JadnaSantos"
            target={'_blank'}
            rel="noreferrer"
          >
            Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </Profiles>
        <Biography>
          <span>{profiles.bio}</span>
        </Biography>
        <Footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profiles.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            Rocketseat
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {profiles.followers} followers
          </span>
        </Footer>
      </ProfileCntent>
    </ProfileContainer>
  );
}
