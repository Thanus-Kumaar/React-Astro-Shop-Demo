import "../assets/Card.css";
interface ProductDetail {
  product: string;
  desc: string;
  price: string;
  sendDetails: (data: { product: string; desc: string; price: string }) => void;
}

function Card(props: ProductDetail) {
  const handlesendDetails = () => {
    props.sendDetails({
      product: props.product,
      desc: props.desc,
      price: props.price,
    });
  };

  return (
    <div className="card-div" onClick={handlesendDetails}>
      <div className="img-div"></div>
      <div className="product">{props.product}</div>
      <div className="product-desc">{props.desc}</div>
      <div className="product-price">{props.price}</div>
    </div>
  );
}

export default Card;
