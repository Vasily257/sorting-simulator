function useHistory({ styles }) {
  const { yearButton, yearButtonActive } = styles;

  function getButtonClassName(buttonId, selectedId) {
    if (buttonId === selectedId) return yearButtonActive;
    return yearButton;
  }

  function getFiltredYearFacts({ yearFacts, selectedId }) {
    const filtredArray = yearFacts.filter(({ id }) => id === selectedId);
    const filtredYearFacts = filtredArray[0];

    return filtredYearFacts;
  }

  return {
    getButtonClassName,
    getFiltredYearFacts,
  };
}

export default useHistory;
