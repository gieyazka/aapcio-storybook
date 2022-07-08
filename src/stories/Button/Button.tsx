import React from 'react';
import './button.css';
import styled from 'styled-components'

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  
  children?: string;
  
  // asd
  something?: string;

  disable?: boolean;

  color? : string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

interface test{
  color?: string
}

const Mytext =  styled.div`
  color: purple;
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  something,
  children,
  color,
  ...props
}: ButtonProps) => {
  console.log(color);
  
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      <Mytext color='red'>
        {label + " / "+ something}
      </Mytext>
      
    </button>
  );
};
