import PropTypes from "prop-types";
import { Section, Title, StatList, Item, Label, Percentage } from "./Statistics.styled";

function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <div>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <Item id={id} key={id}>
              <Label>{label} </Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          ))}
        </StatList>
      </div>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
 stats: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string,
          label: PropTypes.oneOf(['.docx', '.pdf', '.mp3', '.psd']),
          percentage: PropTypes.number,
        }),
      ).isRequired,
};

export default Statistics;
