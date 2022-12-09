import CLASSNAMES from '../../utils/scripts/classnames';
import TEXT_CONTENT from '../../utils/scripts/text-content';

function useHeaderMenuButton({ classNameFromParent, isMenuOpened }) {
  const { main, mainOpened } = CLASSNAMES.HEADER_MENU_BUTTON;
  const { ariaLabelText } = TEXT_CONTENT.HEADER_MENU_BUTTON;

  function getComplexClassNames() {
    const mainClassName = `${classNameFromParent} ${main} ${isMenuOpened ? mainOpened : ''}`;
    return { mainClassName };
  }

  function getClassNames() {
    const { mainClassName } = getComplexClassNames();
    return { mainClassName };
  }

  function getAriaLabelText() {
    const { close, open } = ariaLabelText;
    return { close, open };
  }

  return {
    getClassNames,
    getAriaLabelText,
  };
}

export default useHeaderMenuButton;
