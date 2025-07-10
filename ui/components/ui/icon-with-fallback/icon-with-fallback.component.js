import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const IconWithFallback = ({ name = '', icon = null, size, className, fallbackClassName, wrapperClassName, ...props }) => {
  const [iconError, setIconError] = useState(false);
  const style = size ? { height: `${size}px`, width: `${size}px` } : {};
  
  return (
    <div className={classnames(wrapperClassName)} style={style}>
      {!icon || iconError ? (
        <span 
          className={classnames('icon-with-fallback__fallback', fallbackClassName)}
        >
          {(name && name[0]?.toUpperCase()) || ''}
        </span>
      ) : (
        <img
          src={icon}
          style={style}
          className={className}
          alt={(name || '') + '-icon'}
          onError={() => setIconError(true)}
          {...props}          
        />
      )}
    </div>
  );
};

IconWithFallback.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  fallbackClassName: PropTypes.string,
};

export default IconWithFallback;
