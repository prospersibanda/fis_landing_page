import { FaUpload, FaRobot, FaHandshake, FaChartLine, FaCheckCircle } from 'react-icons/fa';

function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload />,
      title: "Upload Documents",
      description: "Submit your business plans and financial documents securely to our platform.",
      details: [
        "Secure document encryption",
        "Support for multiple file formats",
        "Automated data extraction",
        "Real-time validation"
      ]
    },
    {
      icon: <FaRobot />,
      title: "AI Analysis",
      description: "Our AI analyzes your documents and creates an optimized business model.",
      details: [
        "Machine learning algorithms",
        "Market trend analysis",
        "Competitor benchmarking",
        "Financial projections"
      ]
    },
    {
      icon: <FaHandshake />,
      title: "Investor Matching",
      description: "Get matched with investors who align with your business goals and industry.",
      details: [
        "Investor preference matching",
        "Industry-specific targeting",
        "Investment size compatibility",
        "Geographic considerations"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Growth & Support",
      description: "Receive ongoing support and track your progress with investors.",
      details: [
        "Progress monitoring dashboard",
        "Milestone tracking",
        "Investor communication tools",
        "Performance analytics"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our comprehensive process to connect startups with investors
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white text-2xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-lg text-gray-600">{step.description}</p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center">
                          <FaCheckCircle className="text-indigo-500 mr-2" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;