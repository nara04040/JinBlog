"use client";
import React from "react";

function BlogLogo() {
  const clickHandler = () => {
    window.location.href = "/";
  };

  return (
    <h1 className="flex items-center justify-center font-bold cursor-pointer	" onClick={clickHandler}>
      ☕️ Dev.Jin
    </h1>
  );
}

export default BlogLogo;
