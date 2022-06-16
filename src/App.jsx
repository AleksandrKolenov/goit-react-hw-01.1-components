import Profile from "./components/social-profile/Profile";
import profile from "./components/social-profile/user.json";

import FriendList from "./components/friend-list/FriendList";
import friends from "./components/friend-list/friends.json";

import Statistics from "./components/statistics/Statistics";
import dataStatistics from "./components/statistics/data.json";

import TransactionHistory from "./components/transaction-history/TransactionHistory";
import transactions from "./components/transaction-history/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />

      <Statistics title="Upload stats" stats={dataStatistics} />

      <FriendList friends={friends} />
      {/* <Statistics title="Home work 01 REACT 'COMPONENTS'"/>   */}

      <TransactionHistory items={transactions} />
    </div>
  );
}
