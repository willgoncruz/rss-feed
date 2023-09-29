import { Button as AntdButton } from 'antd';

type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => <AntdButton block>{children}</AntdButton>;

export default Button;
