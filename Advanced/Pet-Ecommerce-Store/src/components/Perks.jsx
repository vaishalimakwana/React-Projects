import React from 'react';
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react';
const Perks = () => {
  const perks = [
    { icon: Truck, text: 'Free Shipping', subtext: 'On Orders Above $150' },
    { icon: Lock, text: 'Secure Payment', subtext: '100% protected payments' },
    { icon: RotateCcw, text: 'Easy Returns', subtext: '30 days easy returns' },
    {
      icon: Clock,
      text: '24/7 Customer Care',
      subtext: 'Support Around the Clock',
    },
  ];
  return (
    <div className="bg-brandnamecolor py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {perks.map((perk, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center text-center sm:text-left"
              >
                <perk.icon
                  className="flex-shrink-0 h-10 w-10 text-white"
                  aria-hidden="true"
                />
                <div className="ml-4">
                  <p className="text-base font-medium text-white">
                    {perk.text}
                  </p>
                  <p className="mt-1 text-sm text-white">{perk.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Perks;
