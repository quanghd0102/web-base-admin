import React, { Children, cloneElement, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { Table, Divider, Icon, Popconfirm, Button } from 'antd';
import { updateHashUrl, updateSearchUrl, convertJsonToQueryString, getQueryParamsUrl } from 'utils';
import { forEach } from 'lodash';
// import actions
import { fetchListBaseAction, deleteDataByIdBaseAction } from 'redux/base/actions';
// import selector
import {getListDataSelector} from 'redux/base/selectors';
import AdminTableWrapper from './styles';
import filterSearch from './FilterSearch';

const { Column } = Table;
const limitRecords = 10;

const AdminTable = ({ children, isActionCol, isSearch = true, resource }) => {
  // redux hooks
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const isFetching = useSelector(state => state[resource]?.isFetching);
  const listResource = useSelector(state => getListDataSelector(state, resource));
  const totalResource = useSelector(state => state[resource].totalData);
  // eslint-disable-next-line
  const [searchText, setSearchText] = useState('');
  const [queryParams, setQueryParams] = useState(null);
  useEffect(() => {
    const fetchListResource = () => {
      dispatch(fetchListBaseAction({ resource, query: queryParams }));
    };
    if(!queryParams) setQueryParams(getQueryParamsUrl());
    else fetchListResource();
  }, [dispatch, queryParams, resource]);

  // dispatch redux actions
  const deleteResourceById = id => {
    dispatch(deleteDataByIdBaseAction({ resource, id }));
  };

  // handle functions
  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const onChangeTable = (pagination, filters, sorter) => {
    const query = {
      limit: pagination.pageSize,
      offset: pagination.pageSize*(pagination.current-1),
    }
    if(sorter?.field) {
      query.orderBy = `${sorter.order === "descend" ? "-" : ""}${sorter.field}`;
    }
    if(filters) {
      forEach(filters, (value, key) => {
        if(!query.filter) query.filter = {};
        query.filter[key.replace('.$', '')] = { '$regex' : value[0], '$options' : 'i' };
      })
    }
    updateSearchUrl(convertJsonToQueryString(query));
    setQueryParams(query);
  };

  const onRow = record => {
    return {
      onClick: () => {
        updateHashUrl(`/${resource}/${record.id}`);
      },
    };
  };

  return (
    <AdminTableWrapper>
      <div className="action-div">
        <Link to={{ hash: `/${resource}/create` }}>
          <Button type="primary">{i18next.t('form.btn.add')}</Button>
        </Link>
      </div>
      <Table
        dataSource={listResource}
        loading={isFetching}
        rowKey="_id"
        onChange={onChangeTable}
        onRow={onRow}
        pagination={{ total: totalResource, defaultPageSize: limitRecords, showSizeChanger: true, size: "small"}}
      >
        {Children.map(children, child => {
          let childProps = {};
          if (isSearch)
            childProps = {
              ...filterSearch(child.props.dataIndex, handleSearch, handleReset, searchInput),
              sorter: true,
            };
          childProps = {
            ...childProps,
            ...child.props,
          };
          return cloneElement(child, childProps);
        })}
        {isActionCol && (
          <Column
            key="action"
            align="center"
            render={(text, record) => (
              <div
                onClick={e => {
                  e.stopPropagation();
                }}
                role="presentation"
              >
                <Link to={{ hash: `/${resource}/${record.id}` }}>
                  <Icon type="form" />
                </Link>
                <Divider type="vertical" />
                <Popconfirm
                  placement="topRight"
                  title="Are you sure delete this?"
                  onConfirm={() => deleteResourceById(record.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <span className="link-text">Delete</span>
                </Popconfirm>
              </div>
            )}
          />
        )}
      </Table>
    </AdminTableWrapper>
  );
};

AdminTable.propTypes = {
  children: PropTypes.array,
  resource: PropTypes.string.isRequired,
  isActionCol: PropTypes.bool,
  isSearch: PropTypes.bool,
};

export default AdminTable;
