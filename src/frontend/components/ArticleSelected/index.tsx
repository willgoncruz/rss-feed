import { Article } from '@types';

type Props = {
  article?: Article;
};

const ArticleSelected = ({ article }: Props) => {
  if (!article) {
    return <div>No article selected ;-;</div>;
  }

  return (
    <div>
      <h1>ARTICLE SELECTED</h1>
      <h2>
        {article.title} - by {article.author.name}
      </h2>
      <div>
        <b>Content TYPE:</b> {article.media.content.type}
      </div>
      <div>
        <b>Content URL:</b> {article.media.content.url}
      </div>
    </div>
  );
};

export default ArticleSelected;
