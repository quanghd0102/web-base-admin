import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'antd';
import { isUndefined } from 'lodash';
import { submitFormBaseAction, fetchDataByIdBaseAction, unSelectCurrentSelectedAction } from 'redux/base/actions';

const FormAdmin = ({ form, render, resource, id }) => {
  const dispatch = useDispatch();
  const defaultFormValues = useSelector(state => state?.[resource]?.currentSelected);
  useEffect(() => {
    if (id) {
      dispatch(fetchDataByIdBaseAction({ resource, id }));
    }
    return () => {
      dispatch(unSelectCurrentSelectedAction({resource}));
    }
  }, [dispatch, id, resource]);

  const getFieldDecoratorAdmin = (name, options = {}) => {
    if (defaultFormValues && !isUndefined(defaultFormValues[name])) {
      return form.getFieldDecorator(name, {
        ...options,
        initialValue: defaultFormValues[name],
      });
    }
    return form.getFieldDecorator(name, options);
  };

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        dispatch(submitFormBaseAction({ resource, params: values }));
      }
    });
  };

  return <Form onSubmit={handleSubmit}>{render(getFieldDecoratorAdmin)}</Form>;
};

FormAdmin.propTypes = {
  form: PropTypes.object,
  render: PropTypes.func,
  resource: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default Form.create()(FormAdmin);
