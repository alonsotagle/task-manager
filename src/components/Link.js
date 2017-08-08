import React from 'react';
import { FlatButton } from 'material-ui';

const Link = ({ active, label, onClick, icon }) => {

  return (
    <FlatButton
      label={label}
      onClick={onClick}
      icon={icon}
      primary={active}
      />
  );
}

export default Link;
