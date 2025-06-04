import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getGundumById,
  updateGundumName,
  deleteGundum,
} from "../adapters/gundumAdapters";

const GundumDetails = () => {
  const [gundum, setGundum] = useState({});
  const [newGundumName, setNewGundumName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // on load, get the fellow by id
  useEffect(() => {
    const doFetch = async () => {
      const [foundGundum, error] = await getGundumById(id);
      setGundum(foundGundum);
    };
    doFetch();
  }, []);

  // when the delete button is pressed, send a DELETE request
  const handleDeleteGundum = async () => {
    await deleteGundum(id);
    navigate("/");
  };

  // when the form is filled out, send a PATCH request
  const handleUpdateGundum = async (e) => {
    e.preventDefault();

    const [updatedGundum, error] = await updateGundumName(id, newGundumName);
    console.log("Updated Gundum: (in details)", updatedGundum);
    setGundum(updatedGundum);

    setNewGundumName("");
  };

  return (
    <>
      <Link to="/">Go Home</Link>
      <h1>Gundum Details</h1>
      <p>Name: {gundum.name}</p>
      <p>Id: {gundum.id}</p>
      <form onSubmit={handleUpdateGundum}>
        <label htmlFor="name">Update Gundum </label>
        <input
          type="text"
          name="name"
          id="name"
          value={newGundumName}
          onChange={(e) => setNewGundumName(e.target.value)}
          placeholder="New Name"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDeleteGundum} className="danger">
        Delete Gundum
      </button>
    </>
  );
};

export default GundumDetails;
