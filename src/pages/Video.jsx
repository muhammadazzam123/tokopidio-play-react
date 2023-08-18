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

  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getVideo();
    getProducts();
    getComments();
  }, []);

  const getVideo = async () => {
    try {
      const respond = await fetch(
        `${import.meta.env.VITE_API_URI}/videos${id}`
      );
      const video = await respond.json();
      setVideo(video);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const respond = await fetch(
        `${import.meta.env.VITE_API_URI}/products/${id}`
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
        `${import.meta.env.VITE_API_URI}/comments/${id}`
      );
      const comments = await respond.json();
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  };

  const postComment = async (username, comment, videoId) => {
    try {
      const respond = await fetch(
        `${import.meta.env.VITE_API_URI}/comments/${videoId}`,
        {
          method: "post",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            username: username,
            comment: comment,
            videoId: videoId,
          }),
        }
      );
      const newComment = await respond.json();
      getComments();
      setUsername("");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postComment(username, comment, id);
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

            <form onSubmit={handleSubmit}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Nama</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Nama Kamu"
                  className="input input-bordered w-full max-w-xs"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Komentar</span>
                </label>
                <textarea
                  name="comment"
                  className="textarea textarea-bordered h-24"
                  placeholder="Isi Komentar"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-sm btn-success mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetail;
