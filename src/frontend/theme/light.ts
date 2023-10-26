import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    borderRadius: 8,
    colorText: '#000000',
    colorPrimary: '#000000',
    colorBorderBg: '#eaeaea',
    colorBgContainer: '#eaeaea',
  },
  components: {
    Card: {
      headerBg: '#eaeaea',
      actionsBg: '#eaeaea',
    },
    Modal: {
      headerBg: '#eaeaea',
      footerBg: '#eaeaea',
      contentBg: '#eaeaea',
    },
  },
};

export default theme;