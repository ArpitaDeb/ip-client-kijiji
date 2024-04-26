import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./GroupList.scss";

const GroupList = ({groupList}) => {

  return (
    <>
    <div className="group">
    <div className="group__heading">List of Groups</div>
    <div className="group__facility">
      {groupList.map((group) => (
        <div key={group.id} className="group__facility-row">
          <div className="group__facility-name">
            <Link to={`/groups/${group.id}`}>
              <div className="group__facility-container">
                {group.name}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default GroupList;
