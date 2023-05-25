import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const randomRgb = () => {
  const rgbNum = () => Math.floor(Math.random() * 256);
  const r = rgbNum();
  const g = rgbNum();
  const b = rgbNum();
  return `rgb(${r},${g},${b})`;
};

const Statistics = ({ data })  => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>

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
    data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;