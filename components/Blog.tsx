import React from 'react';

const Blog: React.FC = () => {
  return (
    <div id="blog" className="flex flex-col items-center justify-center p-8 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">Artigo 1</h3>
          <p className="text-gray-600">Resumo do artigo 1.</p>
          <a href="#" className="text-blue-500">Ler mais</a>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">Artigo 2</h3>
          <p className="text-gray-600">Resumo do artigo 2.</p>
          <a href="#" className="text-blue-500">Ler mais</a>
        </div>
        <div className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-semibold">Artigo 3</h3>
          <p className="text-gray-600">Resumo do artigo 3.</p>
          <a href="#" className="text-blue-500">Ler mais</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
