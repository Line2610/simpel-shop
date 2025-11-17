"use client";
import CartPanel from "./CartPanel";

export default function ClientWrapper({ children }) {
  return (
    <>
      {children}
      <CartPanel />
    </>
  );
}
