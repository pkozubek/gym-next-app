type YoutubeVideoProps = {
  urlVideo: string;
  width: number;
  height: number;
  title: string;
};

const YOUTUBE_URL = "https://www.youtube.com";

export default function YoutubeVideo({
  height,
  urlVideo,
  width,
  title,
}: YoutubeVideoProps) {
  const isShort = urlVideo.includes("/shorts/");

  const urlParams = urlVideo.split("v=");

  let formattedUrl = "";

  if (isShort) {
    const shortsUrlParams = urlVideo.split("/shorts/");
    formattedUrl = `${YOUTUBE_URL}/embed/${shortsUrlParams[1]}`;
  } else if (urlParams.length > 0) {
    formattedUrl = `${YOUTUBE_URL}/embed/${urlParams[1]}`;
  }

  if (!formattedUrl) return null;

  return (
    <iframe
      width={width}
      height={height}
      src={formattedUrl}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  );
}
