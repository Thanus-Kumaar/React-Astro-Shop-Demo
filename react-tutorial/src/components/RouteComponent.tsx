import Market from "./Market";
import NavBar from "./NavBar";
import Login from "./Login";
import Manage from "./Manage";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";


function RouteComponent() {
  let prods = [
    {
      name: "Brave 705",
      desc: "Stay Brave with the 705 Shirt",
      price: "Rs.500",
    },
    {
      name: "Brave 706",
      desc: "Stay Brave with the 706 Shirt",
      price: "Rs.600",
    },
    {
      name: "Brave 155",
      desc: "Stay Brave with the 155 Shirt",
      price: "Rs.450",
    },
  ];

  const updateProductData = (data: {
    prodName: string;
    prodDesc: string;
    Price: string;
  }) => {
    data.Price = "Rs."+data.Price;
    const newProd = {
      name: data.prodName,
      desc: data.prodDesc,
      price: data.Price 
    }
    prods.push(newProd);
  };

  return (
    <>
      <NavBar />
      <div className="page">
        <div>
          <Routes>
            <Route
              path="/"
              Component={() => <Market product={prods} />}
            ></Route>
            <Route
              path="/Market"
              Component={() => <Market product={prods} />}
            ></Route>
            <Route path="/Login" Component={Login}></Route>
            <Route
              path="/Manage"
              Component={() => <Manage sendNewProdData={updateProductData} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default RouteComponent;