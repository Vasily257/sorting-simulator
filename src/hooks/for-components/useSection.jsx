import React from 'react';

function useSection({
  titleText,
  isMainSection,
  sectionClassNameFromChild,
  titleClassNameFromChild,
  styles,
}) {
  const {
    base, title, titleLevelFirst, titleLevelSecond,
  } = styles;

  function getComplexClassNames() {
    const sectionClassName = `${base} ${sectionClassNameFromChild}`;
    const firstLevelTitleClassName = `${title} ${titleLevelFirst} ${titleClassNameFromChild}`;
    const secondLevelTitleClassName = `${title} ${titleLevelSecond} ${titleClassNameFromChild}`;

    return { sectionClassName, firstLevelTitleClassName, secondLevelTitleClassName };
  }

  function getTitleMakrup() {
    const { firstLevelTitleClassName, secondLevelTitleClassName } = getComplexClassNames();

    const firstLevelTitle = <h1 className={firstLevelTitleClassName}>{titleText}</h1>;
    const secondLevelTitle = <h2 className={secondLevelTitleClassName}>{titleText}</h2>;
    const sectionTitle = isMainSection ? firstLevelTitle : secondLevelTitle;

    return { sectionTitle };
  }

  return {
    getComplexClassNames,
    getTitleMakrup,
  };
}

export default useSection;
