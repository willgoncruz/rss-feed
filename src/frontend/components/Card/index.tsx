import { Card as AntdCard } from 'antd';

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => (
  <AntdCard
    bordered={false}
    style={{ width: 320, height: 350, padding: 8 }}
    bodyStyle={{ height: 350, overflow: 'hidden' }}
  >
    {children}
  </AntdCard>
);

const LongCard = ({ children }: CardProps) => (
  <AntdCard
    bordered={false}
    style={{ width: 960, height: 192, margin: '0 auto' }}
    bodyStyle={{ height: 192, overflow: 'hidden' }}
  >
    {children}
  </AntdCard>
);

export { Card, LongCard };
