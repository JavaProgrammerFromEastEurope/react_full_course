import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import CustomSelect from "./components/UI/select/CustomSelect";
import CustomInput from "./components/UI/input/CustomInput";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript 1", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery]   = useState("");


  const getSortedPosts = () => {
    if (selectedSort) {
      return  [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <CustomInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Searching..."
        />
        <CustomSelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sorting"
          options={[
            { value: "title", name: "By title" },
            { value: "description", name: "By description" }
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList  posts={sortedPosts} title="JS posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post has not been finded!</h1>
      )}
      {/* <PostList posts={posts} title="JS Posts" /> */}
      {/* <PostList posts={posts2} title="Python Posts" /> */}
    </div>
  );
};

export default App;
