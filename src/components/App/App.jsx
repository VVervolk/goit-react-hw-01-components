import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Box } from './App.styled';

export const App = () => {
  return (
    <Box>
      <div>
        <Profile
          img={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
