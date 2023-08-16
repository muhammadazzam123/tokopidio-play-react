import heroImage from "../assets/images/hero-image.jpg";

const Hero = () => {
  return (
    <div
      className="hero h-96 rounded mb-5"
      style={{ backgroundImage: "url(" + heroImage + ")" }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-primary-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-success">
            Selamat Datang di Tokopakedi Play!
          </h1>
          <p className="mb-5">
            Mau cari apa hari ini? Masih bingung dengan produk yang mau kamu
            beli? Yuk cek videonya di sini
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
