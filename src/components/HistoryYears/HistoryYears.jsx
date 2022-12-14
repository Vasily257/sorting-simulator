import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton/CustomButton';
import useHistory from '../../hooks/for-components/useHistory';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function HistoryYears({ selectedId, setSelectedID, styles }) {
  const { getButtonClassName } = useHistory({ styles });

  const { year, yearButtonText } = styles;
  const { yearFacts } = TEXT_CONTENT.HISTORY;

  return yearFacts.map(({ id, yearValue }) => (
    <li key={id} className={year}>
      <CustomButton
        className={`${getButtonClassName(id, selectedId)}`}
        onClick={() => setSelectedID(id)}
        isClassicStyle
      >
        <span className={yearButtonText}>{yearValue}</span>
      </CustomButton>
    </li>
  ));
}

HistoryYears.propTypes = {
  selectedId: PropTypes.number.isRequired,
  setSelectedID: PropTypes.func.isRequired,
  styles: PropTypes.objectOf(PropTypes.string),
};

export default HistoryYears;
