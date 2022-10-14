import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <div className={css.sectionCard}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
