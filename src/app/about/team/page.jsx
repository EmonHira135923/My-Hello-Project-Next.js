import React from 'react';

export const metadata = {
  title: "Our Team",
  description: "A food delivery app built with Next.js, showcasing a variety of delicious meals and a seamless shopping experience.",
};

const TeamPage = () => {
    const teamMembers = [
        {
            name: 'Emon Hossain Hira',
            role: 'Lead Developer',
            specialty: 'Next.js & Laravel',
            image: '👤', // Replace with real image path later
        },
        {
            name: 'Sarah Chen',
            role: 'UI/UX Designer',
            specialty: 'Framer Motion & Tailwind',
            image: '🎨',
        },
        {
            name: 'Alex Rivera',
            role: 'Backend Architect',
            specialty: 'MongoDB & Node.js',
            image: '⚙️',
        }
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h1>
                <p className="mt-4 text-lg text-gray-600">
                    The creative minds building the future of 
                    <span className="text-blue-600 font-semibold"> my-hello-project</span>.
                </p>
                <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {teamMembers.map((member, index) => (
                    <div key={index} className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                        {/* Profile Image/Icon */}
                        <div className="w-24 h-24 bg-blue-50 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:rotate-6 transition-transform">
                            {member.image}
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                            <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                            
                            <div className="mt-4 pt-4 border-t border-gray-50">
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Specialty</p>
                                <p className="text-sm text-gray-600 mt-1">{member.specialty}</p>
                            </div>

                            {/* Social Links Placeholder */}
                            <div className="mt-6 flex justify-center gap-4">
                                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                                    in
                                </button>
                                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-900 hover:text-white transition-colors">
                                    gh
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Join Us Section */}
            <div className="mt-20 p-8 bg-gray-900 rounded-3xl text-center text-white">
                <h2 className="text-2xl font-bold">Want to join us?</h2>
                <p className="text-gray-400 mt-2">We're always looking for talented developers and designers.</p>
                <button className="mt-6 px-8 py-3 bg-blue-600 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                    View Openings
                </button>
            </div>
        </div>
    );
};

export default TeamPage;