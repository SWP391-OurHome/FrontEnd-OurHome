import { Heart, MapPin, Bed, Bath, Car, Calendar, DollarSign, User } from "lucide-react"
import Link from "next/link"

export default function RentalCard({ rental, viewMode = "grid" }) {
    const isListView = viewMode === "list"

    return (
        <Card className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${isListView ? "flex" : ""}`}>
            <div className={`relative ${isListView ? "w-80 flex-shrink-0" : "h-48 md:h-56"}`}>
                {/* Property Image */}
                <img
                    src={rental.property.imgURL || "/placeholder.svg"}
                    alt={rental.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                    <Badge
                        variant={rental.status === "Available" ? "default" : "secondary"}
                        className={
                            rental.status === "Available" ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"
                        }
                    >
                        {rental.status}
                    </Badge>
                </div>

                {/* Property Type Badge */}
                <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {rental.property.propertyType}
                    </Badge>
                </div>

                {/* Favorite Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-3 right-3 rounded-full bg-white/80 text-gray-700 hover:bg-teal-100 hover:text-teal-700"
                >
                    <Heart className="h-5 w-5" />
                    <span className="sr-only">Add to favorites</span>
                </Button>
            </div>

            <CardContent className={`p-6 ${isListView ? "flex-1" : ""}`}>
                <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate mb-1">{rental.title}</h3>
                        <p className="text-sm text-gray-500 flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span className="truncate">
                {rental.property.address}, {rental.property.city}
              </span>
                        </p>
                    </div>
                </div>

                {/* Price Information */}
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <DollarSign className="h-4 w-4 text-teal-600 mr-1" />
                        <span className="text-2xl font-bold text-teal-700">${rental.monthlyPrice.toLocaleString()}</span>
                        <span className="text-gray-500 ml-1">/month</span>
                    </div>
                    <p className="text-sm text-gray-600">Deposit: ${rental.deposit.toLocaleString()}</p>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>
              {rental.property.bedrooms} {rental.property.bedrooms === 1 ? "Bed" : "Beds"}
            </span>
                    </div>
                    <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>
              {rental.property.bathrooms} {rental.property.bathrooms === 1 ? "Bath" : "Baths"}
            </span>
                    </div>
                    <div className="flex items-center">
                        <Car className="h-4 w-4 mr-1" />
                        <span>{rental.property.carSpaces} Parking</span>
                    </div>
                </div>

                {/* Available Date */}
                <div className="flex items-center mb-4 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-teal-600" />
                    <span>Available from {new Date(rental.availableFrom).toLocaleDateString()}</span>
                </div>

                {/* Owner Info */}
                <div className="flex items-center mb-4 text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2 text-teal-600" />
                    <span>
            Listed by {rental.owner.firstName} {rental.owner.lastName}
          </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{rental.description}</p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-teal-600 hover:bg-teal-700">
                        <Link href={`/rent/${rental.rentalID}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" className="flex-1 border-teal-600 text-teal-600 hover:bg-teal-50">
                        Contact Owner
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
