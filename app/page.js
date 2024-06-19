"use client";
import PostList from "./components/PostList";
import PaginationButtons from "./components/PaginationButtons";
import { useContext } from "react";
import { PageContext } from "./context/PageContext";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const { data, pageItems } = useContext(PageContext);

  return (
    <div className="mainpage roboto-regular">
      <h1>Main page</h1>
      <SearchBar />
      <PostList posts={pageItems} />
      <PaginationButtons data={data} />
    </div>
  );
}
