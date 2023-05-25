import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers = 0, likes, views } = stats;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={username}
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats__item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
         <li className={css.stats__item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.stats__item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{followers}</span>
        </li>
      </ul>
    </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  // followers: PropTypes.string.isRequired,
  // likes: PropTypes.string.isRequired,
  // views: PropTypes.string.isRequired,
};
    
export default Profile;