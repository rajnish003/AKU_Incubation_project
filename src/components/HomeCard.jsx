import React, { useState } from 'react';

const HomeCard = ({ content }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {content.map((item, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <div
            key={index}
            className="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-70 m-2.5 overflow-hidden text-white rounded-md">
              <img
                className="transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform group-hover:scale-110 w-full h-full object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                {item.name}
              </h6>

              {/* Hide or show only description */}
              {isExpanded && item.description && (
                <p className="text-slate-600 leading-normal font-light">
                  {item.description}
                </p>
              )}

              {/* Always show description2 if exists */}
              {item.description2 && (
                <p className="text-slate-600 leading-normal font-light mt-2">
                  {item.description2}
                </p>
              )}

              {/* Always show sections if exists */}
              {item.sections && (
                <ul className="mt-2 text-slate-600 text-sm list-disc pl-5">
                  {item.sections.map((section, idx) => (
                    <li key={idx} className="mb-1">
                      <strong>{section.heading}</strong>
                      <ul className="list-disc pl-4 mt-1">
                        {section.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              )}

              {/* Always show points if exists */}
              {item.points && (
                <ul className="mt-2 text-slate-600 text-sm list-disc pl-5">
                  {item.points.map((point, i) => (
                    <li key={i} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Read More / Show Less button */}
            {item.description && (
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 text-sm text-white transition-all shadow-md hover:shadow-lg"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HomeCard;
