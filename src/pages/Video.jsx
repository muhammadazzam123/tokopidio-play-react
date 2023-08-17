import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ReactPlayer from "react-player";
import VideoComment from "../components/VideoComment";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const VideoDetail = () => {
  const { id } = useParams();

  const [video, setVideo] = useState({});
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getVideo();
    getProducts();
    getComments();
  }, []);

  const getVideo = async () => {
    try {
      const respond = await fetch(`http://localhost:3000/api/v1/videos/${id}`);
      const video = await respond.json();
      setVideo(video);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const respond = await fetch(
        `http://localhost:3000/api/v1/products/${id}`
      );
      const products = await respond.json();
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const respond = await fetch(
        `http://localhost:3000/api/v1/comments/${id}`
      );
      const comments = await respond.json();
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container h-screen mx-auto">
        <Navbar />
        <div className="flex justify-between h-5/6 w-full">
          <div className="overflow-y-scroll pt-2 scrollbar-thin scrollbar-thumb-success">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  title={product.title}
                  price={product.price}
                  imgUrl={product.imgUrl}
                  productUrl={product.productUrl}
                />
              );
            })}
          </div>
          <div>
            <ReactPlayer url={video.videoUrl} controls={true} />
            <div className="my-5 flex justify-between">
              {video.title != undefined ? (
                <h1>{video.title}</h1>
              ) : (
                <h1>Nama tidak ditemukan</h1>
              )}
              {video.title != undefined ? (
                <h1>{video.author}</h1>
              ) : (
                <h1>Author tidak ditemukan</h1>
              )}
            </div>
          </div>

          <div className="w-1/4 flex flex-col">
            <div className="grow overflow-y-auto scrollbar-thin scrollbar-thumb-success">
              {comments.map((comment) => {
                return (
                  <VideoComment
                    key={comment._id}
                    username={comment.username}
                    commentContent={comment.comment}
                    date={comment.createdAt}
                  />
                );
              })}
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
              <button className="btn btn-sm btn-success mt-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
