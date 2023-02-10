import React from 'react';
import cx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const styles = {
  variant: (
    variant: ButtonProps['variant'],
  ) => {
    if (variant === 'primary') {
      return 'text-grey-dark bg-secondary-medium hover:bg-secondary-dark';
    }
    // if (variant === 'secondary') {
    //   return 'text-grey-700 inner-border-2 inner-border-grey-700';
    // }
    return 'primary';
  },
  size: (type: ButtonProps['size']) => {
    if (type === 'lg') return 'btn-lg';
    if (type === 'md') return 'btn-md';
    if (type === 'sm') return 'btn-sm';
    if (type === 'xs') return 'btn-xs';
    return 'md';
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      size,
      className,
      onClick,
      children,
      ...rest
    } = props;
    return (
      <button
        ref={ref}
        {...rest}
        type='button'
        onClick={props.onClick}
        className={cx(
          'rounded-lg',
          styles.variant(variant),
          styles.size(size),
          className
        )}
      >
        <>
          {children}
        </>
      </button>
    );
  }
);

export default Button;