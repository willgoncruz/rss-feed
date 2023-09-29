import { Input } from 'antd';
import { useState } from 'react';
import useSaveNewFeed from '../../hooks/feed';
import Button from '../Button';

type Props = {
  onSuccess: () => void;
};

const NewFeed = ({ onSuccess }: Props) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const [addNewFeed, { loading, error }] = useSaveNewFeed();

  const onClick = () => {
    addNewFeed({ variables: { url, title } });
    onSuccess();
  };

  return (
    <div>
      <h3>Feed Title</h3>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Example Feed" />

      <h3>Feed URL</h3>
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.xml/feed"
      />

      <Button onClick={onClick}>Add New Feed</Button>
    </div>
  );
};

export default NewFeed;
