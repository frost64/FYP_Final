//--
import objdata from "./Dataset.json";
//--
import "./App.css";
import data from "./all_brands_export.json";
import { useEffect, useState } from "react";
function App() {
  let arra = [];
  arra.push(data);
  let count = -1;
  const color = ["#8c8cf3", "#d7a954", "#a1f9a1", "pink"];
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(arra[0].results);
  const [displayChecked, setdisplayChecked] = useState(false);
  const [batteryChecked, setbatteryChecked] = useState(false);
  const [cameraChecked, setcameraChecked] = useState(false);
  const [storageChecked, setstorageChecked] = useState(false);
  const [datax, setdatax] = useState(objdata);
  const [data2, setdata2] = useState(objdata);
  useEffect(() => {
    if (cameraChecked) {
      console.log("camera is cheaced");
      setdatax(
        data2
          .sort((a, b) =>
            a.camera_sum > b.camera_sum
              ? 1
              : b.camera_sum > a.camera_sum
              ? -1
              : 0
          )
          .reverse()
      );
      console.log(datax);
    }
  }, [cameraChecked]);
  useEffect(() => {
    if (displayChecked) {
      console.log("display is cheaced");
      setdatax(
        data2
          .sort((a, b) =>
            a.display_sum > b.display_sum
              ? 1
              : b.display_sum > a.display_sum
              ? -1
              : 0
          )
          .reverse()
      );
      console.log(datax);
    }
  }, [displayChecked]);
  useEffect(() => {
    if (storageChecked) {
      console.log("storage is cheaced");

      setdatax(
        data2
          .sort((a, b) =>
            a.storage_sum > b.storage_sum
              ? 1
              : b.storage_sum > a.storage_sum
              ? -1
              : 0
          )
          .reverse()
      );
      console.log(datax);
    }
  }, [storageChecked]);
  useEffect(() => {
    if (batteryChecked) {
      console.log("batter is cheaced");

      setdatax(
        data2
          .sort((a, b) =>
            a.battery_sum > b.battery_sum
              ? 1
              : b.battery_sum > a.battery_sum
              ? -1
              : 0
          )
          .reverse()
      );
      console.log(datax);
    }
  }, [batteryChecked]);
  useEffect(() => {
    setdata2(datax);
  }, [datax]);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = arra[0].results.filter((user) => {
        return user.Name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });

      setFoundUsers(results);
    } else {
      setFoundUsers(arra[0].results);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="App" style={{ backgroundColor: "#d0d9d9" }}>
      <h1 className="mainHeading">Mobile Analyzer</h1>
      <div className="mainContainer">
        <div className="leftSide">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h2>Search</h2>

            <input
              style={{
                marginLeft: "15px",
                height: "25px",
                alignSelf: "center",
              }}
              type="search"
              value={name}
              onChange={filter}
              className="input"
              placeholder="Filter"
            />
          </div>

          <div className="qualities">
            <h2>Qualities</h2>
            <div style={{ marginLeft: "20px" }}>
              <div>
                <input
                  id="display"
                  // checked={displayChecked}
                  onChange={() => {
                    setdisplayChecked(!displayChecked);
                  }}
                  type="checkbox"
                />

                <label>Display</label>
              </div>
              <div>
                <input
                  id="camera"
                  // checked={cameraChecked}
                  onChange={() => {
                    setcameraChecked(!cameraChecked);
                  }}
                  type="checkbox"
                />

                <label>Camera</label>
              </div>
              <div>
                <input
                  id="storage"
                  // checked={storageChecked}
                  onChange={() => {
                    setstorageChecked(!storageChecked);
                  }}
                  type="checkbox"
                />
                <label>Storage</label>
              </div>
              <div>
                <input
                  id="battery"
                  // checked={batteryChecked}
                  onChange={() => {
                    setbatteryChecked(!batteryChecked);
                  }}
                  type="checkbox"
                />
                <label>Battery</label>
              </div>
            </div>
            {/* <div style={{ textAlign: "center" }}>
              <button style={{ cursor: "pointer" }} onClick={Submitform}>
                Submit
              </button>
            </div> */}

            <div className="abc">
              <label>
                Results: <br></br>
              </label>
              {data2.slice(0, 5).map((x1) => (
                <span>
                  <ul>
                    <li>{x1.Name}</li>
                  </ul>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="rightSide" style={{ padding: "2%" }}>
          <div
            style={{
              border: "1px solid black",
              padding: "2%",
              display: "flex",
              flexWrap: "wrap",
              minHeight: "100vh",
              backgroundColor: "darkcyan",
            }}
          >
            {foundUsers
              ? foundUsers.slice(0, 10).map((x) => (
                  <div
                    style={{
                      border: "1px solid black",
                      width: "41%",
                      padding: "3%",
                      margin: "5px",
                      backgroundColor: `${color[(count = count + 1)]}`,
                    }}
                  >
                    <div style={{ display: "none" }}>
                      {count === 4 ? (count = 0) : count}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                      }}
                    >
                      <h4>Name:</h4>{" "}
                      <span style={{ marginLeft: "5px", alignSelf: "center" }}>
                        {x.Name}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                      }}
                    >
                      <h4>Display:</h4>{" "}
                      <span style={{ alignSelf: "center", marginLeft: "5px" }}>
                        {x.displaytype}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                      }}
                    >
                      <h4>Camera:</h4>{" "}
                      <span style={{ alignSelf: "center", marginLeft: "5px" }}>
                        {x.cam1modules}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                      }}
                    >
                      <h4>Storage:</h4>{" "}
                      <span style={{ alignSelf: "center", marginLeft: "5px" }}>
                        {x.Storage}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                      }}
                    >
                      <h4>Battery:</h4>{" "}
                      <span style={{ alignSelf: "center", marginLeft: "5px" }}>
                        {x.batdescription1}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                      }}
                    >
                      <h4>Price:</h4>{" "}
                      <span style={{ alignSelf: "center", marginLeft: "5px" }}>
                        {x.price ? x.price : "N/A"}
                      </span>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <a style={{ cursor: "pointer" }} href={x.Link}>
                        more
                      </a>
                    </div>
                  </div>
                ))
              : "not found"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
