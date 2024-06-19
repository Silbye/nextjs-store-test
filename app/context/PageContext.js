"use client";

import { createContext, useEffect, useState } from "react";

export const PageContext = createContext(null);

function PageState({ children }) {
  const [data, setData] = useState([]);
  const [baseData, setBaseData] = useState([]);
  const [pageItems, setPageItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  function handleSearch(value) {
    const res = baseData.filter(
      ({ ["author"]: author }) =>
        author && author.toLowerCase().includes(value.toLowerCase())
    );
    setData(res);
    setCurrentPage(1);
    setPageItems(res.slice(0, 10));
  }

  function changePage(getNewPage) {
    setCurrentPage(getNewPage);
    setPageItems(data.slice((getNewPage - 1) * 10, getNewPage * 10));
  }

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("https://picsum.photos/v2/list/");
      const posts = await res.json();
      console.log(typeof posts);
      console.log(posts);
      setBaseData(posts);
      setData(posts);
      setPageItems(posts.slice(0, 10));
    }
    fetchAPI();
  }, []);

  return (
    <PageContext.Provider
      value={{ data, pageItems, currentPage, changePage, handleSearch }}
    >
      {children}
    </PageContext.Provider>
  );
}

export default PageState;
