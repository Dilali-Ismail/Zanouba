import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ScrollReveal from '../components/ui/ScrollReveal';
import { blogData } from '../data/blog';
import { FiClock, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-bg-primary pt-24 min-h-screen"
        >
            <Helmet>
                <title>Journal & Carnet de Voyage | Riad ZANOUBA</title>
                <meta name="description" content="Lisez nos articles sur Marrakech, l'art de vivre marocain, et les secrets du Riad ZANOUBA." />
            </Helmet>

            {/* Header Banner */}
            <div className="container mx-auto px-6 lg:px-12 py-16 text-center">
                <span className="section-subtitle">Carnet de Voyage</span>
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-secondary dark:text-white font-bold mb-8">
                    Notre Journal
                </h1>
                <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
                <p className="font-montserrat text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                    Inspirations, secrets de la médina et chroniques de la vie au Riad. Découvrez l'âme de Marrakech à travers notre regard.
                </p>
            </div>

            {/* Blog Grid */}
            <section className="section-padding pt-0 pb-24">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {blogData.map((post, index) => (
                            <ScrollReveal key={post.id} delay={index * 0.1}>
                                <article className="group cursor-pointer">
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden aspect-[16/9] mb-6 rounded-lg bg-gray-100 dark:bg-gray-800">
                                        <img
                                            src={post.imagePath}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundColor: '#E0E0E0' }} // Fallback
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur font-montserrat text-xs font-bold uppercase tracking-widest text-primary py-1 px-3 rounded-full">
                                            {post.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <div className="flex justify-between items-center text-xs font-montserrat text-gray-400 mb-3">
                                            <span>{post.date}</span>
                                            <span className="flex items-center"><FiClock className="mr-1" /> {post.readTime}</span>
                                        </div>

                                        <h2 className="font-playfair text-2xl font-bold text-secondary dark:text-white mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="font-montserrat text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <Link to={`/blog/${post.id}`} className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-accent hover:text-primary transition-colors">
                                            Lire l'article <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="btn btn-secondary font-bold text-sm tracking-widest px-8">
                            Charger Plus d'Articles
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Blog;
