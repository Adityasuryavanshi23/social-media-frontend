import React from "react";

const PostsNavHeader = () => {
  return (
    <div className="sticky top-[82px] z-10 mt-[1px] bg-[#121212] pb-4 before:absolute before:inset-x-0 before:bottom-full before:h-[17px] before:bg-[#121212] md:top-[100px] md:mt-0">
      <ul className="no-scrollbar flex w-full overflow-x-auto px-4 sm:px-0">
        <li className="mr-2 inline-block shrink-0">
          <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
            Posts
          </button>
        </li>
        <li className="mr-2 inline-block shrink-0">
          <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
            Edit profile
          </button>
        </li>
        <li className="mr-2 inline-block shrink-0">
          <button className="inline-block px-6 py-1.5 hover:bg-[#2c2c2c]">
            Change password
          </button>
        </li>
        <li className="mr-2 inline-block shrink-0">
          <button className="inline-block bg-[#2c2c2c] px-6 py-1.5">
            Bookmarked
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PostsNavHeader;
