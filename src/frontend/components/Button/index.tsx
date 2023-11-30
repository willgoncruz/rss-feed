import { motion } from 'framer-motion';
import { Button as AntdButton } from 'antd';
import { Text } from '../Typography';

type Props = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: Props) => (
  <motion.div whileTap={{ scale: 0.9 }}>
    <AntdButton onClick={onClick} block>
      <Text>{children}</Text>
    </AntdButton>
  </motion.div>
);

export default Button;
