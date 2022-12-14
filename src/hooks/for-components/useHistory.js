function useHistory({ styles }) {
  const { yearButton, yearButtonActive } = styles;

  function getButtonClassName(buttonId, selectedId) {
    if (buttonId === selectedId) return yearButtonActive;
    return yearButton;
  }

  function getFiltredYearFacts({ yearFacts, selectedId }) {
    return yearFacts.filter(({ id }) => id === selectedId);
  }

  return {
    getButtonClassName,
    getFiltredYearFacts,
  };
}

export default useHistory;
