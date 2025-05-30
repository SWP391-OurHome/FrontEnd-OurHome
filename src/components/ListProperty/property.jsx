import { useState } from "react"
import PropertyCard from "./property-card"

const properties = [
    {
        id: "1",
        title: "Modern Apartment with Ocean View",
        address: "123 Coastal Drive, Miami, FL",
        price: "$450,000",
        image: "/images/modern-apartment.jpg",
        beds: 2,
        baths: 2,
        sqft: 1200,
        propertyType: "Apartment",
        featured: true,
        listingType: "buy",
        description: "Stunning modern apartment with breathtaking ocean views and premium amenities.",
        floor: 15,
        privatePool: false,
        carSpaces: 1,
    },
    {
        id: "2",
        title: "Luxury Villa with Pool",
        address: "456 Palm Avenue, Los Angeles, CA",
        price: "$1,250,000",
        image: "/images/luxury-villa.jpg",
        beds: 5,
        baths: 4.5,
        sqft: 3800,
        propertyType: "Villa",
        featured: true,
        listingType: "buy",
        description: "Exquisite luxury villa featuring a private pool, lush gardens, and panoramic city views.",
        floor: 2,
        privatePool: true,
        carSpaces: 3,
    },
    {
        id: "3",
        title: "Contemporary City Loft",
        address: "789 Urban Street, New York, NY",
        price: "$650,000",
        image: "/images/city-loft.jpg",
        beds: 1,
        baths: 1.5,
        sqft: 950,
        propertyType: "Loft",
        listingType: "rent",
        description: "Chic city loft in the heart of downtown, offering modern amenities and a vibrant urban lifestyle.",
        floor: 8,
        privatePool: false,
        carSpaces: 0,
    },
    {
        id: "4",
        title: "Family Home with Large Yard",
        address: "321 Maple Road, Portland, OR",
        price: "$780,000",
        image: "/images/family-home.jpg",
        beds: 4,
        baths: 3,
        sqft: 2600,
        propertyType: "House",
        listingType: "buy",
        description: "Spacious family home with a large yard, perfect for outdoor activities and family gatherings.",
        floor: 2,
        privatePool: false,
        carSpaces: 2,
    },
    {
        id: "5",
        title: "Waterfront Condo with Marina Access",
        address: "555 Harbor Way, Seattle, WA",
        price: "$520,000",
        image: "/images/waterfront-condo.jpg",
        beds: 2,
        baths: 2,
        sqft: 1350,
        propertyType: "Condo",
        listingType: "rent",
        description:
            "Beautiful waterfront condo with marina access, offering stunning views and a relaxed coastal lifestyle.",
        floor: 5,
        privatePool: false,
        carSpaces: 1,
    },
    {
        id: "6",
        title: "Mountain Retreat with Panoramic Views",
        address: "888 Summit Trail, Aspen, CO",
        price: "$975,000",
        image: "/images/mountain-retreat.jpg",
        beds: 3,
        baths: 2.5,
        sqft: 2100,
        propertyType: "Cabin",
        featured: true,
        listingType: "buy",
        description: "Secluded mountain retreat with panoramic views, perfect for escaping the city and enjoying nature.",
        floor: 1,
        privatePool: false,
        carSpaces: 2,
    },
]

export default function FeaturedProperties() {
    const [activeFilter, setActiveFilter] = useState("All")
    const filters = ["All", "House", "Apartment", "Villa", "Condo", "Loft", "Cabin"]

    const filteredProperties =
        activeFilter === "All" ? properties : properties.filter((property) => property.propertyType === activeFilter)

    return (
        <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50/30 py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 border border-teal-200 mb-6">
                        <span className="text-teal-700 text-sm font-semibold">Premium Collection</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-teal-800 bg-clip-text text-transparent mb-6">
                        Featured Properties
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover our handpicked selection of premium properties in the most desirable locations
                    </p>
                </div>

                {/* Enhanced Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {filters.map((filter) => (
                        <Badge
                            key={filter}
                            variant={activeFilter === filter ? "default" : "secondary"}
                            className={`cursor-pointer px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                                activeFilter === filter
                                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg hover:shadow-xl"
                                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50"
                            }`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </Badge>
                    ))}
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {filteredProperties.map((property) => (
                        <Card
                            key={property.id}
                            className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => (window.location.href = `/properties/${property.id}`)}
                        >
                            <PropertyCard {...property} />
                        </Card>
                    ))}
                </div>

                {/* Enhanced CTA */}
                <div className="mt-16 text-center">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        View All Properties
                    </Button>
                </div>
            </div>
        </section>
    )
}
