import userPlaceholder from "../assets/images/user-placeholder.png";

const VideoComment = () => {
  return (
    <div className="flex gap-4 mb-3">
      <div className="avatar">
        <div className="h-12 w-12 rounded-full bg-primary self-center">
          <img src={userPlaceholder} />
        </div>
      </div>
      <div>
        <p className="text-xs text-end">01 Januari 2023</p>
        <h1 className="font-semibold">Nama</h1>
        <p>Komentar lfasd;fksdf ;dfjs f ekfjas fiejf</p>
      </div>
    </div>
  );
};

export default VideoComment;
