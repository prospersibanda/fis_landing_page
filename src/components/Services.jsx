import { FaFileAlt, FaUsers, FaComments, FaChartBar, FaCog, FaLightbulb, FaShieldAlt, FaGlobe } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaFileAlt />,
      title: "Document Analysis",
      description: "AI-powered analysis of your business documents to create optimized business models and pitch decks.",
      features: [
        "Smart document parsing",
        "Financial model optimization",
        "Market analysis integration",
        "Automated pitch deck generation"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Investor Matching",
      description: "Smart matching algorithm to connect you with relevant angel investors based on your business profile.",
      features: [
        "Investor preference analysis",
        "Industry-specific matching",
        "Investment history tracking",
        "Due diligence support"
      ]
    },
    {
      icon: <FaComments />,
      title: "Communication Tools",
      description: "AI-enhanced tools to help you craft professional and effective investor communications.",
      features: [
        "Email templates",
        "Meeting schedulers",
        "Follow-up automation",
        "Document sharing"
      ]
    },
    {
      icon: <FaChartBar />,
      title: "Progress Tracking",
      description: "Track your fundraising progress and manage investor relationships effectively.",
      features: [
        "Real-time analytics",
        "Investor engagement metrics",
        "Pipeline management",
        "ROI calculations"
      ]
    },
    {
      icon: <FaCog />,
      title: "Process Automation",
      description: "Streamline your fundraising workflow with automated tools and processes.",
      features: [
        "Task automation",
        "Workflow templates",
        "Integration capabilities",
        "Custom alerts"
      ]
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Advisory",
      description: "Get expert guidance on your fundraising strategy and business growth.",
      features: [
        "Expert consultations",
        "Strategy development",
        "Market insights",
        "Growth planning"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance measures for your sensitive data.",
      features: [
        "Data encryption",
        "Access controls",
        "Compliance monitoring",
        "Audit trails"
      ]
    },
    {
      icon: <FaGlobe />,
      title: "Global Network",
      description: "Access to a worldwide network of investors and resources.",
      features: [
        "International investors",
        "Cross-border support",
        "Local market insights",
        "Global partnerships"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions to help you secure funding and grow your business
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-indigo-500 text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;