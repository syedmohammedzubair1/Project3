
import LandingPage1 from "./LandingPage1";

import LikedVideos from "./LikedVideos";
import VideosCard from "./TrendingVideos";
import { Outlet } from "react-router-dom";  // Import Outlet
import { HomeWebinar } from "./Webinar/HomeWebinar";


const SubscribePanel = () => {
  return (
    <>
      <div>
        <section>
          <LandingPage1/>
        </section>
        <section>

          <VideosCard />
        </section>
        <section>
        <HomeWebinar/>
        </section>
        <section>
          <LikedVideos />
        </section>
        
        {/* This ensures that the nested routes (like /subscribe/profile) get rendered here */}
        <Outlet />
      </div>
    </>
  );
};

export default SubscribePanel;
