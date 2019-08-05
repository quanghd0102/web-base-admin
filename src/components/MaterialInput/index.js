import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import MaterialInputWrapper from './styles';

const MaterialInput = ({ placeholder, prefix, ...params }) => (
  <MaterialInputWrapper isPrefix={!!prefix}>
    <Input {...params} />
    {prefix}
    <label>{placeholder}</label>
    <span className="bar" />
  </MaterialInputWrapper>
);

MaterialInput.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
};

export default MaterialInput;
