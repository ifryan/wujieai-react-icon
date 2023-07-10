import React from 'react';
import PropTypes from 'prop-types';

const FileError = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path d="M12 9a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1z"></path>
      <path d="M12 16a1 1 0 100 1.998A1 1 0 0012 16z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a4 4 0 014-4h8.343a4 4 0 012.829 1.172l1.656 1.656A4 4 0 0121 6.657V19a4 4 0 01-4 4H7a4 4 0 01-4-4V5zm16 3h-2a3 3 0 01-3-3V3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8zm-.11-2a2 2 0 00-.476-.757l-1.657-1.657A2 2 0 0016 3.11V5a1 1 0 001 1h1.89z"
      ></path>
    </svg>
  );
};

FileError.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FileError.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default FileError;
