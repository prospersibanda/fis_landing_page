function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-2xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

export default Feature;