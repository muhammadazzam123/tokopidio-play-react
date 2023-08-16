import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactPlayer from "react-player";
import VideoComment from "../components/VideoComment";

const VideoDetail = () => {
  const { id } = useParams();
  return (
    <div className="container h-screen mx-auto flex items-center">
      <div className="flex justify-between h-5/6 w-full">
        <div className="overflow-y-scroll pt-2 scrollbar-thin scrollbar-thumb-success">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <ReactPlayer url="https://youtu.be/S-HDc0h3e_4" />
        <div className="w-1/4 flex flex-col">
          <div className="grow overflow-y-auto scrollbar-thin scrollbar-thumb-success">
            <VideoComment />
            <VideoComment />
            <VideoComment />
            <VideoComment />
            <VideoComment />
            <VideoComment />
          </div>
          <div className="divider"></div>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Nama Kamu"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Komentar</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Isi Komentar"
              ></textarea>
            </div>
            <button className="btn btn-sm btn-success mt-3">Success</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
