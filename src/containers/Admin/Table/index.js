import React, { Children, cloneElement, useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import i18next from 'i18next';
import { Table, Divider, Icon, Popconfirm, Button } from 'antd';
import { history } from 'redux/store';
// import actions
import { fetchListBaseAction, deleteDataByIdBaseAction } from 'redux/base/actions';
// import selector
import {getListDataSelector} from 'redux/base/selectors';
import AdminTableWrapper from './styles';
import filterSearch from './FilterSearch';

const { Column } = Table;

const AdminTable = ({ children, isActionCol, isSearch = true, resource }) => {
  // redux hooks
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state[resource]?.isFetching);
  const listResource = useSelector(state => getListDataSelector(state, resource));
  // dispatch redux actions
  const deleteResourceById = id => {
    dispatch(deleteDataByIdBaseAction({ resource, id }));
  };
  // eslint-disable-next-line
  const [searchText, setSearchText] = useState('');
  const searchInput = useRef(null);
  useEffect(() => {
    const fetchListResource = (query = {}) => {
      dispatch(fetchListBaseAction({ resource, query }));
    };
    fetchListResource();
  }, [dispatch, resource]);

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
    console.log('pagination', pagination);
    console.log('filters', filters);
    console.log('sorter', sorter);
  };

  const onRow = record => {
    return {
      onClick: () => {
        history.push(`/${resource}/${record.id}`);
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
      >
        {Children.map(children, child => {
          let childProps = {};
          if (isSearch)
            childProps = {
              ...filterSearch(child.props.dataIndex, handleSearch, handleReset, searchInput),
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
