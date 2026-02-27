import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const BookingSteps = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const handleNext = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const steps = [
        { id: 1, title: 'Dates & Chambres' },
        { id: 2, title: 'Expériences (Options)' },
        { id: 3, title: 'Informations & Paiement' }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl mt-12 mb-24 border border-gray-100 dark:border-gray-800">

            {/* Stepper Header */}
            <div className="flex relative justify-between mb-16 px-2 md:px-12">
                {/* Progress Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-10 rounded-full" />
                <div
                    className="absolute top-1/2 left-0 h-1 bg-primary -z-10 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                />

                {steps.map((step) => (
                    <div key={step.id} className="flex flex-col items-center">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-montserrat font-bold text-sm transition-colors duration-300 ${currentStep > step.id
                                    ? 'bg-success text-white'
                                    : currentStep === step.id
                                        ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-primary/20'
                                        : 'bg-white border-2 border-gray-300 text-gray-400 dark:bg-[#1A1A1A] dark:border-gray-700'
                                }`}
                        >
                            {currentStep > step.id ? <FiCheck size={20} /> : step.id}
                        </div>
                        <span className={`mt-3 text-xs md:text-sm font-semibold uppercase tracking-wider ${currentStep >= step.id ? 'text-secondary dark:text-white' : 'text-gray-400'
                            }`}>
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Stepper Content Area */}
            <div className="min-h-[400px] relative overflow-hidden flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl p-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        {currentStep === 1 && (
                            <div className="text-center">
                                <h3 className="text-2xl font-playfair mb-4 text-primary">Sélection des Dates</h3>
                                <p className="text-gray-500 font-montserrat">[Composant react-datepicker et liste des chambres ici]</p>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="text-center">
                                <h3 className="text-2xl font-playfair mb-4 text-primary">Personnalisez votre séjour</h3>
                                <p className="text-gray-500 font-montserrat">[Sélection de transfert aéroport, dîner, soins hammam]</p>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="text-center">
                                <h3 className="text-2xl font-playfair mb-4 text-primary">Finalisation</h3>
                                <p className="text-gray-500 font-montserrat">[Formulaire infos client et intégration Stripe]</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Stepper Controls */}
            <div className="flex justify-between items-center mt-8">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className={`flex items-center space-x-2 font-montserrat text-sm uppercase tracking-widest font-bold py-3 px-6 rounded-md transition-all ${currentStep === 1
                            ? 'opacity-50 cursor-not-allowed text-gray-400'
                            : 'text-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700'
                        }`}
                >
                    <FiChevronLeft className="mb-0.5" />
                    <span>Retour</span>
                </button>

                <button
                    onClick={handleNext}
                    className="flex items-center space-x-2 bg-primary hover:bg-[#B85C19] text-white font-montserrat text-sm uppercase tracking-widest font-bold py-3 px-8 rounded-md transition-colors shadow-md shadow-primary/20"
                >
                    <span>{currentStep === totalSteps ? 'Confirmer' : 'Suivant'}</span>
                    {currentStep !== totalSteps && <FiChevronRight className="mb-0.5" />}
                </button>
            </div>

        </div>
    );
};

export default BookingSteps;
