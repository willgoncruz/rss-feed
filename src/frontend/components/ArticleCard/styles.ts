import styled from 'styled-components';

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

export const CardTitle = styled.h3`
  margin: 0;
`;

export const CardAuthor = styled.h5`
  margin-top: 0;
`;