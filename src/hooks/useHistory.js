function useHistory({ styles }) {
  const { yearButton, yearButtonActive } = styles;

  function getButtonClassName(buttonId, selectedId) {
    if (buttonId === selectedId) return yearButtonActive;
    return yearButton;
  }

  function getFiltredYearFacts({ yearFacts, selectedId }) {
    const filtredYearFacts = yearFacts.find(({ id }) => id === selectedId);
    return filtredYearFacts;
  }

  return {
    getButtonClassName,
    getFiltredYearFacts,
  };
}

export default useHistory;
