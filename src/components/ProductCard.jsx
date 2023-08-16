import imagePlaceholder from "../assets/images/image-placeholder.png";

const ProductCard = () => {
  return (
    <div className="w-44 mb-3 mx-2">
      <div className="card glass">
        <figure>
          <img className="h-48 object-fill" src={imagePlaceholder} alt="car!" />
        </figure>
        <div className="card-body">
          <h2>Samsung A54</h2>
          <p>Rp2.000.000</p>
          <div className="card-actions justify-end">
            <button className="btn btn-xs btn-success">Cek Sekarang!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
