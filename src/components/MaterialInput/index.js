import React, { forwardRef } from 'react';
import { Input } from 'antd';
import MaterialInputWrapper from './styles';

// eslint-disable-next-line
const MaterialInput = ({ placeholder, prefix, ...params }, ref) => (
  <MaterialInputWrapper isPrefix={!!prefix} ref={ref}>
    <Input {...params} />
    {prefix}
    <label>{placeholder}</label>
    <span className="bar" />
  </MaterialInputWrapper>
);

export default forwardRef(MaterialInput);
