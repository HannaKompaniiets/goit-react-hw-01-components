import PropTypes from 'prop-types';
import FriendListItem from 'components/friendList/friendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                 <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
                ))}
          </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
 
export default FriendList;