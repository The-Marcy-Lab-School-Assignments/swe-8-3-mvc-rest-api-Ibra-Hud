import handleFetch from "./handleFetch";

export const getAllGundum = async () => {
  const [allGundum, error] = await handleFetch("/api/gundum");
  console.log("All Gundum: (in adapter)", allGundum);
  return [allGundum, error];
};

export const getGundumById = async (id) => {
  const [gundum, error] = await handleFetch(`/api/gundum/${id}`);
  return [gundum, error];
};

export const createGundum = async (gundumName) => {
  const options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name: gundumName }),
  };

  const [newGundum, error] = await handleFetch(`/api/gundum/`, options);
  console.log("New Gundum: (in adapter)", newGundum);
  return [newGundum, error];
};

export const deleteGundum = async (id) => {
  const options = {
    method: "DELETE",
  };
  const [success, error] = await handleFetch(`/api/gundum/${id}`, options);
  return [success, error];
};

export const updateGundumName = async (id, gundumName) => {
  const options = {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name: gundumName }),
  };

  const [updatedGundum, error] = await handleFetch(
    `/api/gundum/${id}`,
    options
  );
  console.log("Updated Gundum: (in adapter)", updatedGundum);
  return [updatedGundum, error];
};
