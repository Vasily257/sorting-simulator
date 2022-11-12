function getTypeClassName(type) {
  let typeClassName;
  let typeActiveClassName;

  if (type === 'profile') {
    typeClassName = 'button-link_type_profile';
    typeActiveClassName = 'button-link_type_profile-active';
  }

  if (type === 'register') {
    typeClassName = 'button-link_type_register';
    typeActiveClassName = 'button-link_type_register-active';
  }

  if (type === 'login') {
    typeClassName = 'button-link_type_login';
    typeActiveClassName = 'button-link_type_login-active';
  }

  return { typeClassName, typeActiveClassName };
}

export default getTypeClassName;
