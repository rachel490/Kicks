import React from 'react';

export const Auth = () => {
  let code = new URL(window.location.href).searchParams.get('code');
  console.log('code', code);
  return <div>{code}</div>;
};
