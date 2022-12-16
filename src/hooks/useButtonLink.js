function useButtonLink({ className, type, styles }) {
  const {
    profile, profileActive, register, registerActive, login, loginActive,
  } = styles;

  let typeClassName;
  let typeActiveClassName;

  if (type === 'profile') {
    typeClassName = `${profile} ${className}`;
    typeActiveClassName = `${profileActive} ${className}`;
  }

  if (type === 'register') {
    typeClassName = `${register} ${className}`;
    typeActiveClassName = `${registerActive} ${className}`;
  }

  if (type === 'login') {
    typeClassName = `${login} ${className}`;
    typeActiveClassName = `${loginActive} ${className}`;
  }

  return { typeClassName, typeActiveClassName };
}

export default useButtonLink;
