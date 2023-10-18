import styled from 'styled-components';

export const CardShortContent = styled.div`
  margin-top: 180px;
`;

export const CardContent = styled.div`
  margin-left: 256px;
`;

export const ArticleDescription = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;
