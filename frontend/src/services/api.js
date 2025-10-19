// Use the working XAMPP Apache URL
const API_BASE_URL = 'http://localhost/Imteaz/Lara+react/e-Cart/backend/public/api';

// Fallback URLs if the primary fails
const FALLBACK_URLS = [
  'http://localhost:8080/api',
  'http://127.0.0.1:8080/api',
  'http://localhost:8000/api',
  'http://127.0.0.1:8000/api'
];

const POSSIBLE_URLS = [API_BASE_URL, ...FALLBACK_URLS];

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.workingURL = null; // Cache the working URL
  }

  async request(endpoint, options = {}) {
    const token = localStorage.getItem('auth_token');
    
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        ...options.headers,
      },
      ...options,
    };

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // If we have a cached working URL, try it first
    if (this.workingURL) {
      try {
        const url = `${this.workingURL}${endpoint}`;
        console.log('🚀 Using cached working URL:', url);
        
        const response = await fetch(url, {
          ...config,
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Success with cached URL');
          return data;
        }
      } catch (error) {
        console.log('❌ Cached URL failed, trying alternatives...');
        this.workingURL = null; // Clear the cache
      }
    }

    // Try all URLs
    for (let i = 0; i < POSSIBLE_URLS.length; i++) {
      const url = `${POSSIBLE_URLS[i]}${endpoint}`;
      
      try {
        console.log(`Attempt ${i + 1}: Making request to:`, url);
        
        const response = await fetch(url, {
          ...config,
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
          } catch (e) {
            errorMessage = response.statusText || errorMessage;
          }
          throw new Error(errorMessage);
        }

        const data = await response.json();
        console.log('✅ Success with:', url);
        
        // Cache the working URL for future requests
        this.workingURL = POSSIBLE_URLS[i];
        this.baseURL = POSSIBLE_URLS[i];
        
        return data;
        
      } catch (error) {
        console.error(`❌ Attempt ${i + 1} failed:`, error.message);
        
        // If this is the last URL to try, throw the error
        if (i === POSSIBLE_URLS.length - 1) {
          if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
            throw new Error('Unable to connect to server. Please ensure XAMPP Apache is running and the Laravel app is accessible.');
          }
          throw error;
        }
        // Otherwise, continue to the next URL
      }
    }
  }

  // Test method
  async test() {
    return this.request('/test');
  }

  // Health check method
  async health() {
    return this.request('/health');
  }

  // Authentication methods
  async register(userData) {
    return this.request('/register', {
      method: 'POST',
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.confirmPassword,
      }),
    });
  }

  async login(credentials) {
    return this.request('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout() {
    return this.request('/logout', {
      method: 'POST',
    });
  }

  async getUser() {
    return this.request('/user');
  }

  // Token management
  setToken(token) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  removeToken() {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

export default new ApiService();