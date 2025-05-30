"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Sparkles } from "lucide-react"

const popularSearches = ["Apartments", "New York", "Modern Houses", "San Francisco", "Luxury Condos"]

export default function HeroSection() {
    const [searchQuery, setSearchQuery] = useState("")
    const [propertyType, setPropertyType] = useState("buy")
    const [priceRange, setPriceRange] = useState("")
    const [propertyCategory, setPropertyCategory] = useState("")

    const handlePopularSearch = (search) => {
        setSearchQuery(search)
    }

    const handleSearch = () => {
        console.log("Searching for:", { searchQuery, propertyType, priceRange, propertyCategory })
    }

    return (
        <div className="relative pt-16 min-h-[700px] flex items-center overflow-hidden">
            {/* Background with gradient overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/images/hero-bg.jpg)",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-teal-900/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Find Your
                        <span className="block bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Dream Home
            </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-200 leading-relaxed">
                        Discover the perfect property from our extensive collection of premium listings with intelligent search and
                        personalized recommendations
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                        <Tabs value={propertyType} onValueChange={setPropertyType} className="w-full">
                            <TabsList className="grid w-full grid-cols-4 bg-gray-50/80 rounded-none h-14">
                                <TabsTrigger
                                    value="buy"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white font-semibold"
                                >
                                    Buy
                                </TabsTrigger>
                                <TabsTrigger
                                    value="rent"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white font-semibold"
                                >
                                    Rent
                                </TabsTrigger>
                                <TabsTrigger
                                    value="sell"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white font-semibold"
                                >
                                    Sell
                                </TabsTrigger>
                                <TabsTrigger
                                    value="estimate"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white font-semibold"
                                >
                                    Estimate
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value={propertyType} className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                    <div className="md:col-span-2">
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-600" />
                                            <Input
                                                type="text"
                                                placeholder="City, Address, ZIP"
                                                className="pl-12 h-14 border-2 border-gray-200 focus:border-teal-500 focus:ring-teal-500 rounded-xl text-lg"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <Select value={priceRange} onValueChange={setPriceRange}>
                                        <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-teal-500 rounded-xl text-lg">
                                            <SelectValue placeholder="Price Range" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="any">Any Price</SelectItem>
                                            <SelectItem value="100k-200k">$100k - $200k</SelectItem>
                                            <SelectItem value="200k-300k">$200k - $300k</SelectItem>
                                            <SelectItem value="300k-500k">$300k - $500k</SelectItem>
                                            <SelectItem value="500k+">$500k+</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Select value={propertyCategory} onValueChange={setPropertyCategory}>
                                        <SelectTrigger className="h-14 border-2 border-gray-200 focus:border-teal-500 rounded-xl text-lg">
                                            <SelectValue placeholder="Property Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="all">All Types</SelectItem>
                                            <SelectItem value="house">House</SelectItem>
                                            <SelectItem value="apartment">Apartment</SelectItem>
                                            <SelectItem value="condo">Condo</SelectItem>
                                            <SelectItem value="land">Land</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Button
                                        onClick={handleSearch}
                                        className="h-14 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        <Search className="h-5 w-5 mr-2" />
                                        Search
                                    </Button>
                                </div>

                                <div className="mt-6 flex flex-wrap gap-3 items-center">
                                    <span className="text-sm font-medium text-gray-600">Popular searches:</span>
                                    {popularSearches.map((search) => (
                                        <Badge
                                            key={search}
                                            variant="secondary"
                                            className="cursor-pointer bg-gradient-to-r from-teal-50 to-emerald-50 text-teal-700 border border-teal-200 hover:from-teal-100 hover:to-emerald-100 hover:border-teal-300 transition-all duration-200 px-4 py-2"
                                            onClick={() => handlePopularSearch(search)}
                                        >
                                            {search}
                                        </Badge>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
