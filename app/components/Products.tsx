'use client';
import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

// Define a estrutura de dados para os produtos
// Corresponde ao tipo retornado pela API /api/products
type Product = {
  name: string;
  image: string;
  model: string;
  treadwear: number;
  traction: string;
  temperature: string;
  pattern: string;
  loadIndex: string;
  speedRating: string;
  noise: number;
  rollingResistance: string;
  wetGrip: string;
  cars: string[];
};

export default function Products() {
  // Estado para armazenar todos os produtos da API
  const [products, setProducts] = useState<Product[]>([]);
  // Estado para armazenar o termo de busca atual
  const [searchTerm, setSearchTerm] = useState('');
  // Estado para armazenar os produtos filtrados baseados na busca
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Efeito para carregar os produtos da API quando o componente monta
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Efeito para filtrar produtos baseado no termo de busca
  // Implementa busca aditiva (todos os termos devem corresponder)
  useEffect(() => {
    // Divide o termo de busca em palavras e remove espaços vazios
    const terms = searchTerm.toLowerCase().split(' ').filter(term => term.length > 0);
    
    const filtered = products.filter(product => {
      // Se não há termos de busca, retorna todos os produtos
      if (terms.length === 0) return true;
      
      // Verifica se TODOS os termos de busca correspondem ao produto
      return terms.every(term => {
        const nameMatch = product.name.toLowerCase().includes(term);
        const modelMatch = product.model.toLowerCase().includes(term);
        // Busca em array de carros compatíveis
        const carMatch = product.cars.some(car => 
          car.toLowerCase().includes(term)
        );
        // Busca específica para dimensões do pneu (ex: 235/55)
        const dimensionMatch = term.includes('/') && product.name.toLowerCase().includes(term);
        
        return nameMatch || modelMatch || carMatch || dimensionMatch;
      });
    });
    
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="w-full flex justify-center flex-col h-full">
      {/* Campo de busca com ícone */}
      <div className="border-gray-500 w-full md:w-1/2 mx-auto mb-4">
        <label htmlFor="search" className="block text-sm/6 font-medium text-gray-900">
          Pesquisa
        </label>
        <div className="mt-2 grid grid-cols-1">
          <input
            id="search"
            name="search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar produtos"
            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
          />
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
          />
        </div>
      </div>

      <div className="mb-4 border-b border-1"></div>
      
      {/* Container principal dos produtos com data-testid requerido */}
      <div data-testid="products">
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500">Nenhum produto encontrado</div>
        ) : (
          // Grid responsivo de cards de produtos
          <div className="grid grid-cols-1 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.name}
                data-testid="product"
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {/* Layout flexível que muda para coluna em telas menores */}
                <div className="flex flex-col md:flex-row">
                  {/* Seção da imagem e modelo */}
                  <div className="md:w-1/4 p-4 flex items-center justify-center bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-48 h-48 object-contain"
                    />
                    <div className="text-center mt-2">
                      <h3 className="font-bold text-lg">{product.model}</h3>
                    </div>
                  </div>
                  
                  {/* Grid de especificações técnicas */}
                  <div className="md:w-3/4 p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-gray-500">Durabilidade</h4>
                      <p className="font-bold text-xl">{product.treadwear}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-500">Tração</h4>
                      <p className="font-bold text-xl">{product.traction}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-500">Temperatura</h4>
                      <p className="font-bold text-xl">{product.temperature}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-500">Índice de velocidade</h4>
                      <p className="font-bold text-xl">{product.speedRating}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-500">Capacidade de Carga</h4>
                      <p className="font-bold text-xl">{product.loadIndex}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-500">Desenho</h4>
                      <p className="font-bold text-xl">{product.pattern}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}