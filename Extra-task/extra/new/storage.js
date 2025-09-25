// storage.js
// Small utility module for localStorage operations.
// Usage: import { getItem, setItem } from './storage.js';

const STORAGE_KEY = 'hotel_customers_v1';

export function getItem() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading localStorage', e);
    return [];
  }
}

export function setItem(dataArray) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataArray));
  } catch (e) {
    console.error('Error writing to localStorage', e);
  }
}

export function clearAll() {
  localStorage.removeItem(STORAGE_KEY);
}
