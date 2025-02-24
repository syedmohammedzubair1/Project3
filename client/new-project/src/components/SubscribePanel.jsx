import LandingPage1 from "./LandingPage1";
import LikedVideos from "./LikedVideos";
import VideosCard from "./TrendingVideos";

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
            <LikedVideos/>
        </section>
      </div>
    </>
  );
};
export default SubscribePanel;
