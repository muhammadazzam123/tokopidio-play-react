import { Link } from "react-router-dom";
import imagePlaceholder from "../assets/images/image-placeholder.png";

const ProductCard = ({ title, price, imgUrl, productUrl }) => {
  return (
    <div className="w-44 mb-3 mx-2">
      <div className="card glass">
        <figure>
          <img
            className="h-40 object-fill"
            src={imgUrl != undefined ? imgUrl : imagePlaceholder}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2>{title}</h2>
          <p>Rp{price}</p>
          <Link
            to={productUrl}
            target="_blank"
            className="card-actions justify-end"
          >
            <button className="btn btn-xs btn-success">Cek Sekarang!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
