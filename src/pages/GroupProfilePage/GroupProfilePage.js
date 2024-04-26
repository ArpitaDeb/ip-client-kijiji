import './GroupProfilePage.scss'
import Members from '../../components/Members/Members';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import RecomendedSellers from '../../components/RecomendedSellers/RecomendedSellers';
import Guidelines from '../../components/Guidelines/Guidelines';
import { useState, useEffect } from 'react';
import LocationIcon from '../../assets/icons/location_icon.png'
import { useParams } from "react-router-dom";
import axios from 'axios';
import Feed from '../../components/Feed/Feed';
const SERVER_URL = process.env.REACT_APP_API_URL;



const GroupProfilePage = () => {
    const { groupId } = useParams()
    const [groupPage, setGroupPage] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const groupReq = await axios.get(`${SERVER_URL}/groups/${groupId}`)
                const groupData = groupReq.data;
                console.log(groupData)
                setGroupPage(groupData)
                setIsFetching(false)
            } catch (error) {
                console.log('Cannot get group data');
            }
        }
        fetchGroup();
    }, []);

    if (isFetching) {
        return (
            <p>... Loading your group data ...</p>
        )
    }
    return (
        <div>
        <main>
                <h1>{groupPage.name}</h1>
                <img className='location__icon'
                src={LocationIcon}
                alt="location icon"
                />
                <p>{groupPage.location} </p>
                <h3>{groupPage.description}</h3>
                <Members members={groupPage.members} />
                <UpcomingEvents upcomingEvents={groupPage.upcoming_events} />
                <Feed/>
                <RecomendedSellers recomendedSellers={groupPage.recommended_sellers} />
                <Guidelines guidelines={groupPage.guidelines} />

                
        </main>
            
        </div>
    );
};

export default GroupProfilePage;