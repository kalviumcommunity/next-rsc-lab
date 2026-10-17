"use client";

import { useState } from "react";

// This is a Client Component. The "use client" directive at the top means
// it (and its imports) ship JavaScript to the browser and run there, so it
// can use hooks like useState and respond to clicks without a page reload.
export default function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  function toggle() {
    setLiked((v) => !v);
    setLikes((n) => (liked ? n - 1 : n + 1));
  }

  return (
    <button className={liked ? "like on" : "like"} onClick={toggle}>
      <span aria-hidden="true">{liked ? "♥" : "♡"}</span>
      {likes}
    </button>
  );
}
