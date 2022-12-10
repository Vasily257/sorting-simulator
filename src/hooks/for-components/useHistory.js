import CLASSNAMES from '../../utils/scripts/classnames';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function useHistory({ selectedId }) {
  const {
    mainClass,
    titleClass,
    contentClass,
    yearsClass,
    yearClass,
    yearButtonClass,
    activeYearButtonClass,
    yearButtonTextClass,
    factsClass,
    factClass,
    factTextClass,
  } = CLASSNAMES.HISTORY;
  const { titleText, factsAriaLabelText, yearFacts } = TEXT_CONTENT.HISTORY;

  function getButtonActiveClassName(id) {
    if (selectedId === id) return activeYearButtonClass;
    return '';
  }

  function getClassNames() {
    return {
      mainClass,
      titleClass,
      contentClass,
      yearsClass,
      yearClass,
      yearButtonClass,
      yearButtonTextClass,
      factsClass,
      factClass,
      factTextClass,
    };
  }

  function getItems() {
    return { yearFacts };
  }

  function getText() {
    return { titleText, factsAriaLabelText };
  }

  return {
    getClassNames,
    getButtonActiveClassName,
    getItems,
    getText,
  };
}

export default useHistory;
