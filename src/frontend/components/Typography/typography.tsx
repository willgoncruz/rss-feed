import React from 'react';
import { Typography } from 'antd';

const { Paragraph, Title, Text } = Typography;

type Props = {
  children: React.ReactNode;
};

export const TextWrapper = ({ children }: Props) => <Text>{children}</Text>;
export const TitleWrapper = ({ children }: Props) => <Title>{children}</Title>;
export const SubtitleWrapper = ({ children }: Props) => <Title level={3}>{children}</Title>;
export const ParagraphWrapper = ({ children }: Props) => <Paragraph>{children}</Paragraph>;
export const DescriptionWrapper = ({ children }: Props) => <Title level={4}>{children}</Title>;
