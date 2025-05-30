import Link from "next/link"
import { Star, Quote, CheckCircle } from "lucide-react"

function TestimonialCard({ text, author, location, rating, image, verified }) {
    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full -translate-y-16 translate-x-16 opacity-50" />

            <div className="relative">
                <div className="flex justify-between items-start mb-6">
                    <Quote className="h-10 w-10 text-teal-600 opacity-60" />
                    <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-5 w-5 ${i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}`} />
                        ))}
                    </div>
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic font-medium">"{text}"</blockquote>

                <div className="flex items-center">
                    <div className="relative">
                        <img
                            src={image || "/placeholder.svg"}
                            alt={author}
                            className="w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                        />
                        {verified && (
                            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full p-1">
                                <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                        )}
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-900 text-lg">{author}</h4>
                        <p className="text-teal-600 font-medium">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    const testimonials = [
        {
            text: "Working with EstateVue was a dream come true. They helped us find our perfect family home in just two weeks! The entire process was smooth and stress-free.",
            author: "Emily & Robert Davis",
            location: "New Homeowners in Portland",
            rating: 5,
            image: "/images/client-emily.jpg",
            verified: true,
        },
        {
            text: "The agents at EstateVue went above and beyond to help me sell my property at a great price. Their market knowledge and negotiation skills are unmatched.",
            author: "Thomas Wright",
            location: "Property Seller in San Diego",
            rating: 5,
            image: "/images/client-thomas.jpg",
            verified: true,
        },
        {
            text: "As a first-time buyer, I had so many questions. My agent was patient, knowledgeable, and guided me through every step of the process. Highly recommend!",
            author: "Sophia Martinez",
            location: "First-time Buyer in Chicago",
            rating: 4,
            image: "/images/client-sophia.jpg",
            verified: true,
        },
    ]

    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-teal-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 border border-teal-200 mb-6">
                        <span className="text-teal-700 text-sm font-semibold">Client Stories</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-teal-800 bg-clip-text text-transparent mb-6">
                        What Our Clients Say
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Don't just take our word for it - hear from our satisfied clients who found their dream homes with EstateVue
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold text-lg group"
                    >
                        <span>View More Testimonials</span>
                        <Star className="ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
