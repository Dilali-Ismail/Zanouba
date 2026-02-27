import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiWifi, FiWind, FiKey } from 'react-icons/fi';
import { PiBathtubLight } from 'react-icons/pi';

const amenityIcons = {
    'Wifi Rapide': <FiWifi />,
    'Climatisation': <FiWind />,
    'Cheminée': <FiKey />,
    'Baignoire en Cuivre': <PiBathtubLight />,
    'Double Vasque': <PiBathtubLight />,
    'Douche Tadelakt': <PiBathtubLight />
};

const RoomCard = ({ room }) => {
    return (
        <motion.div
            className="card group relative aspect-[3/4] overflow-hidden rounded-xl"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Image */}
            <img
                src={room.imagePath}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundColor: '#E0E0E0' }} // Fallback
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"></div>

            {/* Default Content (Bottom) */}
            <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-500 ease-in-out group-hover:translate-y-[-100%]">
                <h3 className="font-playfair text-2xl font-bold tracking-wide mb-1 drop-shadow-md">{room.name}</h3>
                <p className="font-montserrat text-sm text-gray-300 font-medium">À partir de {room.price}€ / nuit</p>
            </div>

            {/* Reveal Content (Slides up on Hover) */}
            <div className="absolute top-full left-0 w-full h-full bg-secondary/95 backdrop-blur-sm p-6 flex flex-col justify-center text-white transition-transform duration-500 ease-in-out group-hover:translate-y-[-100%]">
                <h3 className="font-playfair text-2xl text-accent font-bold mb-3">{room.name}</h3>
                <p className="font-montserrat text-sm text-gray-200 mb-6 leading-relaxed line-clamp-3">
                    {room.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                        <div key={idx} className="flex items-center text-xs font-montserrat text-gray-300">
                            <span className="text-accent mr-2 text-base">
                                {amenityIcons[amenity] || <FiKey />}
                            </span>
                            <span className="truncate">{amenity}</span>
                        </div>
                    ))}
                </div>

                <Link
                    to={`/booking?room=${room.id}`}
                    className="mt-auto block w-full text-center py-3 border border-accent text-accent hover:bg-accent hover:text-secondary font-montserrat uppercase text-sm font-semibold tracking-wider transition-colors duration-300"
                >
                    Réserver
                </Link>
            </div>
        </motion.div>
    );
};

export default RoomCard;
