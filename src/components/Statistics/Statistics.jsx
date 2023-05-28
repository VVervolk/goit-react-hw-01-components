import PropTypes from 'prop-types';
import { Title, Item, StatList, Section } from './Statistics.styled';
import { generateRandomColor } from 'components/helpers/generateRandomColor';

export const Statistics = ({ title, stats }) => {
  const items = stats.map(({ id, label, percentage }) => {
    return (
      <Item key={id} color={generateRandomColor()}>
        <span>{label}</span>
        <span>{percentage}%</span>
      </Item>
    );
  });

  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>{items}</StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
