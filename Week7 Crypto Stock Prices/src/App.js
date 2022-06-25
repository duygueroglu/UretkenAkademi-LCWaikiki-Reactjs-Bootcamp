import { useState, useEffect } from "react";
import EzReactTable from "ez-react-table";
import "./styles.css";
import alertify from "alertifyjs";

export default function App() {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    } catch (e) {
      alert("API Error");
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const columns = [
    {
      title: "Name",
      key: "name",
      width: 100,
      render: (value, object) => {
        return (
          <div
            style={{ color: "#8f5ab7", display: "flex", alignItems: "center" }}
          >
            <img height="20px" width="20px" src={object?.image} alt="coin" />
            <span style={{ marginLeft: "10px" }}>{object?.name}</span>
          </div>
        );
      }
    },
    {
      title: "Price",
      key: "current_price",
      width: 100,
      render: (value, object) => <div>{`$${value}`}</div>
    },
    {
      title: "Change",
      key: "price_change_percentage_24h",
      width: 100,
      render: (value, object) => {
        return (
          <div style={{ color: /-/.test(value) ? "#ff0374" : "#06a847" }}>
            {value}%
          </div>
        );
      }
    },
    {
      title: "High 24 Hours",
      key: "high_24h",
      width: 90,
      render: (value, object) => {
        return <div>{`$${value}`}$</div>;
      }
    },
    {
      title: "Low 24 Hours",
      key: "low_24h",
      width: 90,
      render: (value, object) => {
        return <div>{`$${value}`}$</div>;
      }
    },
    {
      title: "Add",
      width: 70,
      myClick: function () {
        alertify.success("Added to basket");
      },
      render: function () {
        return (
          <button
            onClick={this.myClick}
            style={{
              color: "#8f5ab7",
              display: "flex",
              alignItems: "center"
            }}
          >
            Add
          </button>
        );
      }
    }
  ];

  return (
    <EzReactTable
      selectable
      initialSelected
      cols={columns}
      data={coins}
      darkMode
      title="Crypto Tracking"
      defaultSort="id"
      accentColor="#8f5ab7"
      tableHeight={300}
    />
  );
}
