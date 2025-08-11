import React from "react";

export default function PageHeader({ title, description }) {
  return (
    <div className="mb-12 text-center">
      <h1 className="mb-4 text-5xl font-bold text-amber-900">{title}</h1>
      <p className="mx-auto max-w-2xl text-xl text-gray-600">{description}</p>
    </div>
  );
}
