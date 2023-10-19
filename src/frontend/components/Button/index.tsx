import { Button as AntdButton } from 'antd';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => (
  <AntdButton onClick={onClick} block>
    {children}
  </AntdButton>
);

export default Button;
