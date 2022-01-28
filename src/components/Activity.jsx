import React from 'react';

function Activity({activity}) {
  return <div>
      <ul>
        <li>Activity: {activity.activity}</li>
        <li>Type: {activity.type}</li>
        <li>Participants: {activity.participants}</li>
      </ul>
  </div>;
}

export default Activity;
