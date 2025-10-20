export const BASE_URL = "http://localhost:8000";


export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Signup
    LOGIN: "/api/auth/login", // Authenticate user & return JWT token
    GET_PROFILE: "/api/auth/profile", // Get logged-in user details
  },
  MAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", // Upload profile picture
  },

}