import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import data from "../data/MOCK_DATA (4).json";
import Loader from "./loader";
import CollegeTable from "./collegeTable";
import SortColleges from "./sortColleges";

const Home = () => {
  const [displayedData, setDisplayedData] = useState([]);
  const [startIndex, setStartIndex] = useState(10);
  const itemsPerPage = 10;

  useEffect(() => {
    setDisplayedData(data.slice(0, itemsPerPage));
  }, []);

  const fetchMoreData = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  useEffect(() => {
    const newData = data.slice(startIndex, startIndex + itemsPerPage);
    setDisplayedData((prevData) => [...prevData, ...newData]);
  }, [startIndex]);

  return (
    <InfiniteScroll
      dataLength={displayedData.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<Loader />}
      scrollThreshold={0.9}
    >
      <SortColleges data={data} setDisplayedData={setDisplayedData} />
      <CollegeTable displayedData={displayedData} />
    </InfiniteScroll>
  );
};

export default Home;
