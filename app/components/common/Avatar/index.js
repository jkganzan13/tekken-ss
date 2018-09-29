import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Styled';

const Avatar = ({ src }) =>
  src ? <Styled.Avatar src={src} /> : <Styled.DefaultImage />;

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
