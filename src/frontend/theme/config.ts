import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    borderRadius: 8,
    colorText: '#eaeaea',
    colorPrimary: '#eaeaea',
    colorBorderBg: '#000000',
    colorBgContainer: '#000000',
  },
  components: {
    Card: {
      headerBg: '#000000',
      actionsBg: '#000000',
    },
    Modal: {
      headerBg: '#000000',
      footerBg: '#000000',
      contentBg: '#000000',
    },
  },
};

export default theme;