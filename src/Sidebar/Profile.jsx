import React from "react";

import profile from "../assets/profile.jpg"


function Profile(){


return(


<>
{/* <div className="pro"> */}


<center>
<div class="profile-card">

  <img className="profile" src={profile} alt="profile" />

  <h2 class="name">john carter</h2>
  <p class="role">student</p>

  <div class="info">
    <p>✉ Guest User</p>
    <p>📅 Joined 22/03/2026</p>
  </div>

</div>
</center>




</>

)

}
export default Profile;


