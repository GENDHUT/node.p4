import React from 'react';

const Portfolio = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <p className="text-lg mb-4">Berikut adalah beberapa proyek yang pernah saya kerjakan:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Proyek 1</h3>
          <p>Deskripsi singkat proyek 1.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Proyek 2</h3>
          <p>Deskripsi singkat proyek 2.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-bold">Proyek 3</h3>
          <p>Deskripsi singkat proyek 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
