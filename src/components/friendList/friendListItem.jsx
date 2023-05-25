import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({isOnline, name, avatar, id}) => {
    return (
       <>
                    <li key={id} className={css.item}>
                     <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                     <p className={css.name}>{name}</p>
                    </li>  
        </>
    )
}
 
FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;