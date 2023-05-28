import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      <FriendListItem friends={friends} />
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
