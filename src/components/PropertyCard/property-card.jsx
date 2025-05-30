"use client"

import { Heart, MapPin, Bed, Bath, Square } from "lucide-react"
    return (
        <Card
            className="group overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => (window.location.href = `/properties/${id}`)}
        >
            <div className="relative">
                {/* Property Image */}
                <div className="h-48 md:h-56 lg:h-64 w-full relative overflow-hidden">
                    <img
                        src={image || "/placeholder.svg"}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Property Type Badge */}
                <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white text-teal-700">
                        {propertyType}
                    </Badge>
                </div>

                {/* Featured Badge */}
                {featured && (
                    <div className="absolute top-3 right-3">
                        <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>
                    </div>
                )}

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

            <CardContent className="p-4">
                <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900 truncate">{title}</h3>
                        <p className="mt-1 text-sm text-gray-500 flex items-center">
                            <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
                            <span className="truncate">{address}</span>
                        </p>
                    </div>
                    <p className="text-lg font-bold text-teal-700 ml-2">{price}</p>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>
              {beds} {beds === 1 ? "Bed" : "Beds"}
            </span>
                    </div>
                    <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>
              {baths} {baths === 1 ? "Bath" : "Baths"}
            </span>
                    </div>
                    <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{sqft.toLocaleString()} sqft</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )

