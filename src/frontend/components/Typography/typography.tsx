import React from 'react';
import { Typography } from 'antd';
import { Trans } from 'react-i18next';

const { Paragraph, Title, Text } = Typography;

type Props = {
  children: React.ReactNode;
};

const Translate = ({ children }: Props) => <Trans>{children}</Trans>;

export const TextWrapper = ({ children }: Props) => (
  <Text>
    <Translate>{children}</Translate>
  </Text>
);
export const TitleWrapper = ({ children }: Props) => (
  <Title>
    <Translate>{children}</Translate>
  </Title>
);
export const SubtitleWrapper = ({ children }: Props) => (
  <Title level={3}>
    <Translate>{children}</Translate>
  </Title>
);
export const ParagraphWrapper = ({ children }: Props) => (
  <Paragraph>
    <Translate>{children}</Translate>
  </Paragraph>
);
export const DescriptionWrapper = ({ children }: Props) => (
  <Title level={4}>
    <Translate>{children}</Translate>
  </Title>
);
