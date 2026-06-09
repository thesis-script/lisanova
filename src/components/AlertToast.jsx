// src/components/AlertToast.jsx
import React from 'react';

export default function AlertToast({ message }) {
  if (!message) return null;
  return <div className="alert-toast">{message}</div>;
}
