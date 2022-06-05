import React, { useEffect } from 'react';
import './CustomTextInput.css';
import classNames from 'classnames';

const KEYBOARD_KEY_ENTER = 'Enter';

type inputValueType = string | number;

const isInputValueUnChanged = (oldValue: string, newValue: string) => {
  return oldValue === newValue;
};

interface CustomTextInputProps {
  className?: string;
  value: string;
  onBlur?: (name: string, value: inputValueType) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  onCancel?: () => void;
}

const CustomTextInputComp = ({
  className = '',
  value,
  onBlur = () => {
    return;
  },
  onChange,
  name,
  label,
  onCancel = () => {
    return;
  },
}: CustomTextInputProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const textInputRef = React.createRef<HTMLInputElement>();

  useEffect(() => {
    if (isActive && textInputRef && textInputRef.current && textInputRef.current.focus) {
      textInputRef.current.focus();
    }
  }, [isActive, textInputRef]);

  const onInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event?.target?.value;

    if (!newValue || isInputValueUnChanged(String(value), newValue)) {
      setIsActive(false);
      return;
    }
    setIsActive(false);
    onBlur(name, newValue);
  };

  const onCustomTextInputClick = () => {
    if (textInputRef && textInputRef.current && textInputRef.current.value) {
      textInputRef.current.value = '';
    }
    setIsActive(true);
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event && event.key && event.key === KEYBOARD_KEY_ENTER) {
      const newValue = textInputRef.current?.value || '';

      if (!newValue) {
        setIsActive(false);
        return;
      }

      setIsActive(false);
      onBlur(name, newValue);
    }
  };

  return (
    <div className={classNames('CustomTextInput', className)} onClick={onCustomTextInputClick}>
      <div className="label">{`${label}`}</div>
      <div className="text-input">
        <span className="input-value" style={{ display: isActive ? 'none' : 'block' }}>
          {value}
        </span>
        <input
          className="input-value"
          style={{ display: isActive ? 'block' : 'none' }}
          ref={textInputRef}
          onBlur={onInputBlur}
          onKeyDown={onInputKeyDown}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export const CustomTextInput = React.memo(CustomTextInputComp);
