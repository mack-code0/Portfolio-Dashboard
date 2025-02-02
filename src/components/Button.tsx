import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = styled.button<ButtonProps>`
  /* Base styling */
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '8px 16px';
      case 'large':
        return '14px 32px';
      default:
        return '10px 24px';
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'large':
        return '16px';
      default:
        return '14px';
    }
  }};
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  /* Color variants */
  background-color: ${({ variant, disabled }) => {
    if (disabled) return '#cccccc';
    switch (variant) {
      case 'secondary':
        return '#6c757d';
      case 'danger':
        return '#dc3545';
      default:
        return '#1ca86c';
    }
  }};
  color: white;

  &:hover {
    background-color: ${({ variant, disabled }) => {
      if (disabled) return '#cccccc';
      switch (variant) {
        case 'secondary':
          return '#5a6268';
        case 'danger':
          return '#c82333';
        default:
          return '#018a4f';
      }
    }};
  }

  &:active {
    transform: scale(0.98);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

export default Button