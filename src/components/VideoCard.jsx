const VideoCard = ({ video }) => {
  return (
    <div className="card bg-base-300 shadow-lg hover:cursor-pointer hover:bg-base-200">
      <figure>
        <img
          src={
            "https://img.youtube.com/vi/" +
            video.youtubeId +
            "/maxresdefault.jpg"
          }
          alt="Produk"
        />
      </figure>
      <div className="card-body">
        <div>
          <p>{video.views} x ditonton</p>
        </div>
        <h2 className="card-title">{video.title}</h2>
        <p>{video.author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Gawai</div>
          <div className="badge badge-outline">Teknologi</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
