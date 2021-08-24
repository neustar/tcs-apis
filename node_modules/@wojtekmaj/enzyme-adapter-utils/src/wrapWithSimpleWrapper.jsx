import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

// eslint-disable-next-line prefer-arrow-callback
const Wrapper = () => Object.assign(function SimpleSFCWrapper({ children }) {
  return children;
}, { propTypes, defaultProps });

export default function wrap(element) {
  return <Wrapper>{element}</Wrapper>;
}
