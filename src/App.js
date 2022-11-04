import React, { useRef, useState } from "react";
import "./styles/App.css";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import CustomButton from "./components/UI/button/CustomButton";
import CustomInput from "./components/UI/input/CustomInput";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <div className="App">
      <PostForm />
      {/* <PostList posts={posts} title="JS Posts" /> */}
      {/* <PostList posts={posts2} title="Python Posts" /> */}
    </div>
  );
};

export default App;
