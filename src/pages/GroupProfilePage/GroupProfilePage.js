import "./GroupProfilePage.scss";
import Members from "../../components/Members/Members";
import UpcomingEvents from "../../components/UpcomingEvents/UpcomingEvents";
import RecomendedSellers from "../../components/RecomendedSellers/RecomendedSellers";
import Guidelines from "../../components/Guidelines/Guidelines";
import { useState, useEffect } from "react";
import LocationIcon from "../../assets/icons/location_icon.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import Feed from "../../components/Feed/Feed";
const SERVER_URL = process.env.REACT_APP_API_URL;

const GroupProfilePage = () => {
  const { groupId } = useParams();
  const [groupPage, setGroupPage] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const groupReq = await axios.get(`${SERVER_URL}/groups/${groupId}`);
        const groupData = groupReq.data;
        console.log(groupData);
        setGroupPage(groupData);
        setIsFetching(false);
      } catch (error) {
        console.log("Cannot get group data");
      }
    };
    fetchGroup();
  }, [groupId]);

  if (isFetching) {
    return <p>... Loading your group data ...</p>;
  }
  return (
    <div>
      <main className="group-profile">
        <div className="group-info1">
          <h1>{groupPage.name}</h1>
          <img
            className="location__icon"
            src={LocationIcon}
            alt="location icon"
          />
          <p>{groupPage.location} </p>
          <h3>{groupPage.description}</h3>
        </div>
        <div className="group-info2">
          <Members members={groupPage.members} />
          <Feed posts={groupPage.post_feeds} />
          <div className="group-info3">
            <div className="group-info">
              <UpcomingEvents upcomingEvents={groupPage.upcoming_events} />
            </div>
            <div className="group-info">
              <RecomendedSellers
                recomendedSellers={groupPage.recommended_sellers}
              />
            </div>
            <div className="group-info">
              <Guidelines guidelines={groupPage.guidelines} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GroupProfilePage;
