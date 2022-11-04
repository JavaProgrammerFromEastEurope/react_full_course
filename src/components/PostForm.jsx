import React, { useRef, useState } from 'react'
import CustomButton from './UI/button/CustomButton';
import CustomInput from './UI/input/CustomInput';

const PostForm = () => {
  const [post, setPost] = useState({ title: "", body: "" });
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" }
  ]);
  // const [posts2, setPosts2] = useState([
  //   { id: 1, title: "Python 1", body: "Description" },
  //   { id: 2, title: "Python 2", body: "Description" },
  //   { id: 3, title: "Python 3", body: "Description" }
  // ]);

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(bodyInputRef.current.value);
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body,
    // };
    setPosts([...posts, { ...post, id: Date.now() }]);
    // setBody('');
    // setTitle('');
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      {/* Controlled Component */}
      <CustomInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post Title"
      />
      {/* Uncontrolled element - uses 'Ref'*/}
      <CustomInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        ref={bodyInputRef}
        type="text"
        placeholder="Description"
      />
      <CustomButton onClick={addNewPost}>Create a post</CustomButton>
    </form>
  );
};

export default PostForm
