import React from "react";
import ReactSpinner from "react-bootstrap-spinner";

export function LoadingIndicator({ size = "1" }) {
  return <ReactSpinner type="border" color="primary" size={size.toString()} />;
}
