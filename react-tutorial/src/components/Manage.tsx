import { useState } from "react";
import Heading from "./Heading";
import "../assets/Manage.css";

interface Props {
  sendNewProdData: (data: {
    prodName: string;
    prodDesc: string;
    Price: string;
  }) => void;
}

function Manage(props: Props) {
  const [ProdName, setProdName] = useState("");
  const [ProdDesc, setProdDesc] = useState("");
  const [Price, setPrice] = useState("");

  const handleData = () => {
    props.sendNewProdData({
      prodName: ProdName,
      prodDesc: ProdDesc,
      Price: Price,
    });
  };

  return (
    <>
      <Heading title="Manage Astro" desc="Astro Shop gives you wings" />
      <div className="manage-div">
        <div className="prod-div-title">Add Product</div>
        <div className="left-right">
          <div className="left-div">
            <div className="input-div">
              <div className="label">Product Name</div>
              <input
                type="text"
                placeholder="Enter Product Name"
                value={ProdName}
                onChange={(e) => setProdName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="input-div">
              <div className="label">Product Description</div>
              <input
                type="text"
                placeholder="Enter Product Description"
                value={ProdDesc}
                onChange={(e) => setProdDesc(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          <div className="right-div">
            <div className="input-div">
              <div className="label">Product Price</div>
              <input
                type="text"
                placeholder="Enter Price"
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
                className="form-input"
              />
            </div>
            <button className="add-button" onClick={handleData}>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;
