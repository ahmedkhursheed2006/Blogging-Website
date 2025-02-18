const API_URL = import.meta.env.VITE_API_URL;

// Signup
export const signup = async (userData) => {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

// Login using email and password
export const login = async (userData) => {
  
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

// Google OAUth
export const googleLogin = async () => {
  window.location.href = `${API_URL}/auth/google`;
};


// Creating posts
export const createPost = async (postData) => {  
  const res = await fetch(`${API_URL}/posts`, { 
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`); // Handle errors properly
  }

  return res.json();
};

// Getting Posts
export const getPosts = async () => {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
};


// Getting Posts by ID
export const getPostById = async (id) => {
  const res = await fetch(`${API_URL}/posts/${id}`);
  return res.json();
};


// Delete Posts
export const deletePost = async (id) => {
  const res = await fetch(`${API_URL}/posts/${id}`, { method: "DELETE" });
  return res.json();
};

