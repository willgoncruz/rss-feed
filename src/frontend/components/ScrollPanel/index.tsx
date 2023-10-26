import styled from 'styled-components';
import { ThemeConfig } from 'antd';
import { useThemeContext } from '../../theme/context';

const Scroll = styled.div`
  width: auto;
  height: 950px;
  overflow-y: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props: ThemeConfig) => props.token!.colorBorderBg};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

type Props = {
  children: React.ReactNode;
};

const ScrollPanel = ({ children }: Props) => {
  const theme = useThemeContext();
  return <Scroll {...theme}>{children}</Scroll>;
};

export default ScrollPanel;
