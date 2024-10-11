import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import ReactSpinner with SSR disabled
const ReactSpinner = dynamic(() => import('react-bootstrap-spinner'), { ssr: false });

export function LoadingIndicator({ size = '1' }) {
  return <ReactSpinner type="border" color="primary" size={size.toString()} />;
}
