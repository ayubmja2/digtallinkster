const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (json) {
    const data = await res.json();
    return data;
  }
};

export const register = async (user) => {
  return fetcher({
    url: "/api/register",
    method: "POST",
    body: user,
    json: false,
  });
};
export const signin = async (user) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
    json: false,
  });
};

// creates a new collection in db
export const createNewCollection = async (title, description) => {
  return fetcher({
    url: "/api/collection",
    method: "POST",
    body: { title, description },
  });
};

// creates a new webmark in the collection
export const createNewWebmark = async (title, url, description, id) => {
  return fetcher({
    url: `/api/webmark`,
    method: "POST",
    body: { title, url, description, id },
  });
};

// updates a webmark in the collection
export const updateWebmark = async (title, url, description, id) => {
  return fetcher({
    url: `/api/updatewebmark`,
    method: "PUT",
    body: { title, url, description, id },
  });
};

// deletes a webmark in the collection
export const deleteWebmark = async (id) => {
  return fetcher({
    url: `/api/deletewebmark`,
    method: "DELETE",
    body: { id },
  });
};
