import { useState } from 'react';

function UpdateArticle({ title, desc, level, onSubmit }) {
  console.log('UpdateArticle render');
  const [content, setContent] = useState({
    title: title,
    desc: desc,
    level: level,
  });
  // const [newTitle, setNewTitle] = useState(title);
  // const [newDesc, setNewDesc] = useState(desc);

  // const handleTitleChange = e => {
  //   setNewTitle(e.target.value);
  // };
  // const handleDescChange = e => {
  //   setNewDesc(e.target.value);
  // };

  return (
    <>
      <h2>Update Article</h2>
      <ArticleForm initTitle={title} initDesc={desc} initLevel={level} onSubmit={onSubmit} />
    </>
  );
}
export default UpdateArticle;
