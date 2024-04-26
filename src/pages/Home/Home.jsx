import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupList from "../../components/GroupList/GroupList";

const apiURL = process.env.REACT_APP_API_URL;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get(`${apiURL}/groups`);
        setGroupList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Group lists:", error);
      }
    };
    fetchGroups();
  }, []);

  return (
    <>
      {!isLoading ? (
        <GroupList groupList={groupList} />
      ) : (
        <div className="isLoading">Loading...</div>
      )}
    </>
  );
};

export default Home;
