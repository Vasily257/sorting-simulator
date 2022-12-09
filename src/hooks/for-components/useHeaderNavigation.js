import CLASSNAMES from '../../utils/scripts/classnames';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function useHeaderNavigation() {
  const {
    main,
    mainTypeSignBar,
    list,
    listTypeSignBar,
    item,
    itemTypeSignBar,
    link,
    linkTypeSignBar,
    activeLink,
  } = CLASSNAMES.HEADER_NAVIGATION;
  const { navbarItems, signbarItems, profileButton } = TEXT_CONTENT.HEADER_NAVIGATION;

  function getClassNames() {
    return {
      main,
      mainTypeSignBar,
      list,
      listTypeSignBar,
      item,
      itemTypeSignBar,
      link,
      linkTypeSignBar,
      activeLink,
    };
  }

  function getItems() {
    return { navbarItems, signbarItems };
  }

  function getProfileButtonInfo() {
    const { text, type, path } = profileButton;
    return { text, type, path };
  }

  return {
    getClassNames,
    getItems,
    getProfileButtonInfo,
  };
}

export default useHeaderNavigation;
