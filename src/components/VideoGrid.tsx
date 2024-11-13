import { VideoCard } from "./VideoCard";

const VIDEOS = [
    {
    title:"how to stay hard in the bed for long period of time | AMAZING RESULTS | Work with me !",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "PROKS GOD",
    views: "900M",
    timesstamp: "2 days ago",
    },
    {
    title:"how to stay low in the bed for short amount of time | AMAZING RESULTS | Work with her !",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "PROKS DEVIL",
    views: "90M",
    timesstamp: "1 day ago",
    },
    {
    title: "how to stay in the bed | BAD RESULTS!!! | Work with her !",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "PROKS human",
    views: "80M",
    timesstamp: "4 days ago",
    },
    {
    title:"Secrets to a Good Night's Sleep | Incredible Tips | Sleep like a Pro",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "Sleep Master",
    views: "35M",
    timesstamp: "3 hours ago",
    },
    {
    title: "The Ultimate Bed Workout for Better Health | Boost Your Energy!",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "Health Hero",
    views: "150M",
    timesstamp: "5 hours ago",
    },
    {
    title: "How to Stay Energized in Bed | Morning Routine Hacks",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "Energy Boosters",
    views: "200M",
    timesstamp: "1 week ago",
    },
    {
    title: "Maximize Your Relaxation: Bed Yoga for Stress Relief",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "Relaxing Life",
    views: "40M",
    timesstamp: "2 days ago",
    },
    {
    title: "Best Bed Accessories for Comfort and Sleep Quality",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "Home Essentials",
    views: "75M",
    timesstamp: "1 month ago",
    },
    {
    title: "How to Avoid Bed-related Back Pain | Expert Tips",
    thumbnailImage: "ytThumbnail.jpg",
    channelImage: "image.png",
    author: "Posture Pros",
    views: "45M",
    timesstamp: "4 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  pl-20 pr-10 ">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            thumbnailImage={video.thumbnailImage}
            channelImage={video.channelImage}
            author={video.author}
            views={video.views}
            timesstamp={video.timesstamp}
          />
        </div>
      ))}
    </div>
  );
};
