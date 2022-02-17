import React from 'react';
import classNames from 'classnames';
import './btn-buy.css';

export const BtnBuy = ({
    onClick,
    type,
    children,
    size = 's'
}) => {
  const btnClass = classNames({
      'btn': true,
      'btn-secondary': type==='secondary',
      'btn-primary': type==='primary',
      'btn-small': size==='small',
      'btn-medium': size==='medium',
  })
  return (
      <button className={ btnClass } onClick={ onClick }>
          { children }
      </button>
  )
}
