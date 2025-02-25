import LikedVideos from "./LikedVideos";
import VideosCard from "./TrendingVideos";
import { Outlet } from "react-router-dom";  // Import Outlet

const SubscribePanel = () => {
  return (
    <>
      <div>
        <section>
          <VideosCard />
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
