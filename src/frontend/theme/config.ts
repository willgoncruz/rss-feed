import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    borderRadius: 8,
    colorText: '#eaeaea',
    colorPrimary: '#eaeaea',
    colorBgContainer: '#000000',
  },
  components: {
    Card: {
      headerBg: '#000000',
      actionsBg: '#000000',
    },
  }
};

export default theme;