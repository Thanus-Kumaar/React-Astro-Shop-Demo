import Card from "./Card";
import Heading from "./Heading";
import "../assets/Market.css";

interface products {
  product: { name: string; desc: string; price: string }[];

}

function Market(props : products) {
  let prods = props.product;

  const handleChildData = (data: {
    product: string;
    desc: string;
    price: string;
  }) => {
    alert(data.product + data.desc + data.price);
  };

  return (
    <>
      <Heading
        title="Astro Shop"
        desc="A shop where you can buy your dreams!"
      />
      <div className="main-market">
        {prods.map((prod) => (
          <Card
            product={prod.name}
            desc={prod.desc}
            price={prod.price}
            sendDetails={handleChildData}
          />
        ))}
      </div>
    </>
  );
}

export default Market;
