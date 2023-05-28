import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  Item,
  Quantity,
} from './Profile.styled';

export const Profile = ({ img, username, tag, location, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <Container>
      <Description>
        <Avatar src={img} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <span>Followers</span>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <span>Views</span>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <span>Likes</span>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
