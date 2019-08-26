import styled from 'styled-components';
import themeConfig from 'configs/theme';

const RoutersWrapper = styled.div`
  .ant-form-item {
    margin-bottom: 10px;
    text-align: left;
  }

  .link-text {
    cursor: pointer;
    color: ${themeConfig.palette.primaryColor}
  }
`;

export default RoutersWrapper;
