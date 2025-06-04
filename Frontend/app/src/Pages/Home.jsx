import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllGundum, createGundum } from "../adapters/gundumAdapters";

const Home = () => {
  const [gundum, setGundum] = useState([]);

  const [newGundumName, setNewGundumName] = useState("");

  const [newlyAddedGundum, setNewlyAddedGundum] = useState({});

  useEffect(() => {
    const doFetch = async () => {
      const [allGundum, error] = await getAllGundum();
      console.log("All Gundum: ", allGundum);
      setGundum(allGundum);
    };
    doFetch();
  }, [newlyAddedGundum]);

  const handleCreateGundum = async (e) => {
    e.preventDefault();
    console.log("New Gundum Name: ", newGundumName);
    const [newGundum, error] = await createGundum(newGundumName);
    setNewlyAddedGundum(newGundum);
    setNewGundumName("");
  };

  return (
    <>
      <h1>Home</h1>
      <form onSubmit={handleCreateGundum}>
        <label htmlFor="name">Add A New Gundum</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newGundumName}
          onChange={(e) => setNewGundumName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {gundum.map((gundum) => {
          return (
            <li key={gundum.id}>
              <Link to={`/gundum/${gundum.id}`}>
                {gundum.name} (User {gundum.id})
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
