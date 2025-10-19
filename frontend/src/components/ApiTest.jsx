import { useState } from 'react';
import apiService from '../services/api';

const ApiTest = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const response = await apiService.test();
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testHealth = async () => {
    setLoading(true);
    try {
      const response = await apiService.health();
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testRegister = async () => {
    setLoading(true);
    try {
      // Use a unique email each time to avoid conflicts
      const timestamp = Date.now();
      const response = await apiService.register({
        name: 'Test User',
        email: `test${timestamp}@example.com`,
        password: 'password123',
        confirmPassword: 'password123'
      });
      setResult(JSON.stringify(response, null, 2));
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testDirectFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost/Imteaz/Lara+react/e-Cart/backend/public/api/test', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setResult(`Direct fetch success:\n${JSON.stringify(data, null, 2)}`);
      } else {
        setResult(`Direct fetch failed: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      setResult(`Direct fetch error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>API Connection Test</h2>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={testDirectFetch} disabled={loading}>
          Direct Fetch Test
        </button>
        <button onClick={testHealth} disabled={loading} style={{ marginLeft: '10px' }}>
          Test Health
        </button>
        <button onClick={testConnection} disabled={loading} style={{ marginLeft: '10px' }}>
          Test API Connection
        </button>
        <button onClick={testRegister} disabled={loading} style={{ marginLeft: '10px' }}>
          Test Register
        </button>
      </div>
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '10px', 
        borderRadius: '5px',
        minHeight: '100px',
        whiteSpace: 'pre-wrap'
      }}>
        {loading ? 'Loading...' : result || 'Click a button to test the API'}
      </pre>
    </div>
  );
};

export default ApiTest;