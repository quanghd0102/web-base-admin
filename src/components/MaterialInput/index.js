import React, { forwardRef, cloneElement, useState } from 'react';
import { Input, Tooltip, Icon } from 'antd';
import i18next from 'i18next';
import MaterialInputWrapper from './styles';

// eslint-disable-next-line
const MaterialInput = ({ placeholder, prefix, suffix, type, ...params }, ref) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const toggleInputPasswordStatus = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  const renderInput = () => {
    switch (type) {
      case 'password':
        return [
          <Input
            {...params}
            type={isPasswordHidden ? 'password' : 'input'}
            key={`input-${placeholder}`}
          />,
          <Tooltip
            title={isPasswordHidden ? i18next.t('input.show') : i18next.t('input.hide')}
            key={`suffix-${placeholder}`}
          >
            <Icon
              type={isPasswordHidden ? 'eye-invisible' : 'eye'}
              className="suffix"
              onClick={toggleInputPasswordStatus}
            />
          </Tooltip>,
        ];
      default:
        return <Input {...params} type={type} />;
    }
  };

  return (
    <MaterialInputWrapper isPrefix={!!prefix} isSuffix={!!suffix || type === 'password'} ref={ref}>
      {renderInput(type, params)}
      {prefix && cloneElement(prefix, { className: 'prefix' })}
      {suffix && cloneElement(suffix, { className: 'suffix' })}
      <label>{placeholder}</label>
      <span className="bar" />
    </MaterialInputWrapper>
  );
};

export default forwardRef(MaterialInput);
