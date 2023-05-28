import PropTypes from 'prop-types';

import { Item } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  const items = friends.map(({ avatar, name, isOnline, id }) => (
    <Item key={id} className="item" props={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  ));

  return items;
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
