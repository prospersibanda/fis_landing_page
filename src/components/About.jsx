function About() {
  const stats = [
    { label: "Startups Funded", value: "500+" },
    { label: "Total Investment", value: "$100M+" },
    { label: "Success Rate", value: "85%" },
    { label: "Angel Investors", value: "1,000+" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in startup funding through cutting-edge technology and AI."
    },
    {
      title: "Transparency",
      description: "We believe in complete transparency in all our processes and communications with both startups and investors."
    },
    {
      title: "Inclusivity",
      description: "We're committed to making startup funding accessible to entrepreneurs from all backgrounds and experiences."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our platform technology to our customer service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-3xl text-xl text-gray-600 lg:mx-auto">
            We're revolutionizing how startups connect with investors through AI-powered solutions and human expertise
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
          <p className="text-gray-600 mb-4">
            Founded in 2020, we recognized a critical gap in the startup ecosystem: the lack of efficient, transparent, and accessible funding mechanisms for early-stage startups. Our founders, combining decades of experience in venture capital and artificial intelligence, set out to create a platform that would democratize access to startup funding.
          </p>
          <p className="text-gray-600">
            Today, we've grown into a global platform that has helped hundreds of startups secure funding and build successful businesses. Our AI-driven approach, combined with our extensive network of angel investors, has revolutionized how startups and investors connect and collaborate.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;