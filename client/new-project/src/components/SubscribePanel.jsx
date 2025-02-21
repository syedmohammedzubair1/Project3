import LandingPage from "./LandingPage";
import LikedVideos from "./LikedVideos";
import VideosCard from "./TrendingVideos";

const SubscribePanel = () => {
  return (
    <>
      <div>
        <section>
          <LandingPage />
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
