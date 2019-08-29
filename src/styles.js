import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .route-modal{
    .ant-drawer-header {
      .ant-page-header {
        padding: 0;

        .ant-page-header-heading-title{
          font-weight: 500;
        }
      }
    }
  }
`

export default GlobalStyle;