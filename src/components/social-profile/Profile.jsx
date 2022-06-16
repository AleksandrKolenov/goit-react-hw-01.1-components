import PropTypes from 'prop-types'; 
import { List, Description, Avatar, Name, Tag, Stats, Item } from './Profile.styled';
export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <List>
      
      <Description>
        <Avatar src={avatar} alt={username} class="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Tag>{location}</Tag>
      </Description>

      <Stats>
        <Item>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </Item>
        <Item>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </Item>
        <Item>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </Item>
      </Stats>
    </List>
  );
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats:
        PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
    }),
};