//--
import data2 from "./Dataset.json";
//--
import "./App.css";
import data from "./all_brands_export.json";
import { useState } from "react";
function App() {
  
  let array2 =[];
  array2.push(data2);

  // const [name, setName] = useState("");
  // const [foundUsers2, setFoundUsers] = useState(array2[0].results);


  let arra = [];
  arra.push(data);
  let count = -1;

  
  const [name, setName] = useState("");
  const [foundUsers, setFoundUsers] = useState(arra[0].results);

  console.log('Array2',array2[0])
  //-- 
  
    
  //--

  console.log(arra[0].results);
  const color = ["#8c8cf3", "#d7a954", "#a1f9a1", "pink"];
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

  
    }
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
                height: "15px",
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
                <input type="checkbox" />
                <label>Display</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Camera</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Storage</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Battery</label>
              </div>
              
            
            </div>
            <div style={{ textAlign: "center" }}>
              <button style={{ cursor: "pointer" }}>Submit</button>
            </div>


            <div class = "abc">
            <label>Results: <br></br></label>
            {array2[0].slice(0,5).map((x1) =>(
              <span> 
                <ul>
                  <li>
                    {x1.Name}
                  </li>
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
