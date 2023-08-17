import userPlaceholder from "../assets/images/user-placeholder.png";

const VideoComment = ({ username, commentContent, date }) => {
  return (
    <div className="flex gap-4 mb-3">
      <div className="avatar">
        <div className="h-12 w-12 rounded-full bg-primary self-center">
          <img src={userPlaceholder} />
        </div>
      </div>
      <div className="w-full">
        <p className="text-xs text-end">
          {new Date(date).toLocaleDateString()}
        </p>
        <h1 className="font-semibold">{username}</h1>
        <p>{commentContent}</p>
      </div>
    </div>
  );
};

export default VideoComment;
