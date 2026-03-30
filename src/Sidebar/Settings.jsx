import React from "react";

function Settings(){



return(



<>


<h2>Settings</h2>
<b>Configure your UniNexus experience and account security.</b>



 
          <div className="announcements">
            <div className="An">📤Notification Preferences</div>
            <h3>Spring Registration Open</h3>
            <p>Stay updated with what matters most to your academic journey.</p>
            <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
          </div> 
          


<div className="announcements">

    <div className="An"><h3>📨Academic Alerts</h3></div>
    <p>Course registration, grade postings, and deadline reminders.</p>
</div>

<div className="announcements">

   <div className="An"> <h3>✉️Campus News & Events</h3></div>
    <p>Course registration, grade postings, and deadline reminders.</p>
</div>



<div className="announcements">

    <div className="An"><h3>
🛩️Mobile Push Notifications</h3></div>
    <p>Course registration, grade postings, and deadline reminders.</p>
</div>






</>

)


}
export default Settings;