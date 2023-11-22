import { Space } from 'antd';
import { US, BR, FlagComponent } from 'country-flag-icons/react/3x2';
import styled from 'styled-components';
import { i18n } from '../../language';

type Language = {
  icon: FlagComponent;
  slug: string;
  title: string;
};

const LanguageContainer = styled.div`
  width: 60px;
  height: 40px;
`;

const LanguageSelector = () => {
  const languages: Language[] = [
    {
      title: 'English',
      icon: US,
      slug: 'en',
    },
    {
      title: 'Portuguese',
      icon: BR,
      slug: 'pt',
    },
  ];

  return (
    <Space>
      {languages.map((lang, i) => (
        <LanguageContainer key={i} onClick={() => i18n.changeLanguage(lang.slug)}>
          <lang.icon />
        </LanguageContainer>
      ))}
    </Space>
  );
};

export default LanguageSelector;
