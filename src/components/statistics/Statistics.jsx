import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const randomRgb = () => {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();
  return `rgb(${r},${g},${b})`;
};

const Statistics = ({ title, data })  => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.title}>
                {data.map(item => (
                    <li key={item.id} className={css.item}   style={{
              backgroundColor: randomRgb(),
            }}>
                        <span  className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}</span>
                    </li>
   
))}
                    </ul>
</section>

    );
};


Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;