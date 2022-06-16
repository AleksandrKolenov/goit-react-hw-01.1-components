import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ isOnline, avatar, name, id }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // avatar: PropTypes.string,
    // name: PropTypes.string.isRequired,
    // isOnline: PropTypes.string.isRequired
  }),
};

export default FriendList;
