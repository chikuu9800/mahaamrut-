import { useParams } from 'react-router-dom';
import { Mockdata } from '../Data/MockData';
import { useState } from 'react';

const SchemeDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const scheme = Mockdata.find(item => item.id === Number(id));

  if (!scheme) {
    return <div className="p-4">Scheme not found</div>;
  }

  const renderTabContent = (tab: any) => {
    if (tab.button) {
      return (
        <div className="flex justify-center items-center p-8">
          <a 
            href={tab.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-colors"
          >
            {tab.button}
          </a>
        </div>
      );
    }

    if (tab.details) {
      return (
        <div className="space-y-6">
          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{tab.details.description}</p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Eligibility</h2>
            <p className="text-gray-700">{tab.details.eligibility}</p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Benefits</h2>
            <p className="text-gray-700">{tab.details.benefits}</p>
          </section>

          <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Application Process</h2>
            <p className="text-gray-700">{tab.details.applicationProcess}</p>
          </section>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{scheme.title}</h1>
      
      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex flex-wrap -mb-px">
          {scheme.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`inline-block py-4 px-6 text-sm font-medium ${
                activeTab === index
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-500 hover:text-gray-600 hover:border-gray-300 border-b-2 border-transparent'
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {renderTabContent(scheme.options[activeTab])}
      </div>
    </div>
  );
};

export default SchemeDetails;
