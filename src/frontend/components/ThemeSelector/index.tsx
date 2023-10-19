import { Button, Space, ThemeConfig } from 'antd';
import { DarkTheme, LightTheme } from '../../theme';
import { useThemeContext } from '../../theme/context';

const themes = [DarkTheme, LightTheme];

type ThemeIconButtonProps = {
  theme: ThemeConfig;
  onClick: (theme: ThemeConfig) => void;
};

const ThemeIconButton = ({ theme, onClick }: ThemeIconButtonProps) => (
  <Button
    type="primary"
    shape="circle"
    onClick={() => onClick(theme)}
    style={{ background: theme.token!.colorBgContainer }}
  />
);

const ThemeSelector = () => {
  const { setTheme } = useThemeContext();

  return (
    <Space>
      {themes.map((theme, i) => (
        <ThemeIconButton key={i} theme={theme} onClick={setTheme} />
      ))}
    </Space>
  );
};

export default ThemeSelector;
