import React, { useState } from 'react';

/**
 * 21st.dev Component: Product Rail Gallery
 * Registry URL: https://21st.dev/r/dhxwhy/product-rail-gallery
 * Install command: npx shadcn@latest add "https://21st.dev/r/dhxwhy/product-rail-gallery"
 * Author: dhxwhy
 * Best for: E-Commerce Portfolios, Fashion & Streetwear Designers, Apparel Brands, Merch Showcases
 *
 * Description: Interactive fashion rack hero where real garment pieces hang from wooden
 * hangers on a 3D clothing rail, slide with physics, and turn to face the user on hover.
 */

interface GarmentItem {
  id: string;
  name: string;
  category: string;
  price?: string;
  image: string;
}

interface ProductRailGalleryProps {
  headline?: string;
  subheadline?: string;
  items?: GarmentItem[];
}

export const ProductRailGallery: React.FC<ProductRailGalleryProps> = ({
  headline = "Curated Drops & Digital Storefronts",
  subheadline = "Interactive 3D product showcase crafted for next-gen apparel and streetwear commerce.",
  items = [
    {
      id: '1',
      name: 'Oversized Heavyweight Tee',
      category: 'Streetwear 01',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '2',
      name: 'Raw Denim Utility Jacket',
      category: 'Outerwear',
      price: '$180',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '3',
      name: 'Structured Boxy Hoodie',
      category: 'Fleece Drop',
      price: '$110',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '4',
      name: 'Tactical Cargo Pant',
      category: 'Bottoms',
      price: '$140',
      image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=600&q=80',
    },
  ],
}) => {
  const [activeItem, setActiveItem] = useState<GarmentItem>(items[0]);

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#0a0a0c] text-white py-16 px-6">
      {/* Top Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4 pt-6">
        <span className="text-xs uppercase tracking-widest font-mono text-zinc-400">
          E-Commerce & Digital Merchandising
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {headline}
        </h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
          {subheadline}
        </p>
      </div>

      {/* Interactive Clothing Rail Physics Simulation Container */}
      <div className="relative max-w-5xl mx-auto w-full my-12">
        {/* The Metal Rail Bar */}
        <div className="absolute top-0 inset-x-4 h-2 bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 rounded-full shadow-lg z-10" />

        {/* Garment Rack Items */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
          {items.map((item) => {
            const isSelected = activeItem.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  isSelected ? 'scale-105' : 'opacity-70 hover:opacity-100 hover:-translate-y-1'
                }`}
              >
                {/* Wooden Hanger Hook */}
                <div className="w-12 h-6 border-t-2 border-r-2 border-zinc-400 rounded-tr-full mb-1 group-hover:border-white transition-colors" />

                {/* Garment Card */}
                <div
                  className={`w-full aspect-[3/4] rounded-2xl overflow-hidden border backdrop-blur-md transition-all duration-300 shadow-xl ${
                    isSelected
                      ? 'border-white/40 shadow-white/10 ring-2 ring-white/20'
                      : 'border-white/10'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="text-center mt-3 space-y-0.5">
                  <div className="text-xs font-mono text-zinc-400">{item.category}</div>
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  {item.price && <div className="text-xs font-semibold text-zinc-300">{item.price}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Item Drawer / Footer Summary */}
      <div className="max-w-md mx-auto text-center border-t border-white/10 pt-4 text-xs font-mono text-zinc-500">
        Selected: <span className="text-white font-semibold">{activeItem.name}</span> • Click to inspect piece
      </div>
    </section>
  );
};
