import React from 'react';
import PropTypes from 'prop-types';

const Qq = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.032 13.686a25.446 25.446 0 00-.574-1.545l-.568-1.35v-.161c.001-4.621-2.765-7.726-6.882-7.726-4.118 0-6.884 3.105-6.884 7.725v.16l-.557 1.323a24.785 24.785 0 00-.585 1.575c-.681 2.084-.732 3.6-.151 4.506.314.49.807.816 1.362.908a2.21 2.21 0 00.245 1.714c.66 1.06 1.909 1.14 3.74 1.14 1.057 0 2.183-.054 2.829-.111.646.057 1.77.11 2.828.11 1.83 0 3.08-.078 3.74-1.138a2.21 2.21 0 00.244-1.714 2.005 2.005 0 001.364-.909c.58-.905.529-2.422-.151-4.507zM18.51 17.22h-.015c-.37 0-1.377-1.557-1.377-1.557 0 .926-.5 2.26-1.581 3.131.404.119.901.302 1.22.526.286.201.25.406.198.49-.11.18-1.06.238-2.12.238-1.088 0-2.293-.062-2.828-.119-.94.081-1.885.12-2.829.119-1.06 0-2.008-.058-2.12-.238-.052-.083-.088-.289.199-.49.317-.224.815-.407 1.22-.526-1.082-.872-1.583-2.206-1.583-3.132 0 0-1.007 1.558-1.376 1.558h-.015c-.167-.02-.385-.875.29-2.943.141-.434.336-.94.53-1.425l.714-1.697c0-.02-.009-.354-.009-.525 0-2.901 1.44-5.818 4.979-5.818 3.538 0 4.977 2.917 4.977 5.818 0 .172-.008.506-.01.526l.716 1.697c.194.486.389.99.53 1.425.674 2.068.456 2.923.29 2.942z"
      ></path>
    </svg>
  );
};

Qq.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Qq.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Qq;