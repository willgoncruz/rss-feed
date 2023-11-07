import { Button as AntdButton } from 'antd';
import { Text } from '../Typography';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => (
  <AntdButton onClick={onClick} block>
    <Text>{children}</Text>
  </AntdButton>
);

export default Button;
