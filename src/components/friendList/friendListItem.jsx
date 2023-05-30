import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({isOnline, name, avatar}) => {
    return (
       <>
                    <li>
                     <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
                        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                     <p className={css.name}>{name}</p>
                    </li>  
        </>
    )
}
 
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;