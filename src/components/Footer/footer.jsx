import Link from "next/link"
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Home className="h-8 w-auto text-teal-500" />
                            <span className="ml-2 text-xl font-serif font-bold text-white">EstateVue</span>
                        </div>
                        <p className="mb-4 text-gray-400">
                            Your trusted partner in real estate since 2010. We help you find the perfect property to call home.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Buy Property
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Rent Property
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Sell Property
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Property Valuation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Our Agents
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Property Types */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Property Types</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Apartments
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Houses
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Villas
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Commercial
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Office Spaces
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-teal-500 transition-colors">
                                    Land
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex">
                                <MapPin className="h-5 w-5 mr-3 text-teal-500 flex-shrink-0" />
                                <span>
                  1234 Real Estate Blvd, Suite 500
                  <br />
                  San Francisco, CA 94105
                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-teal-500 flex-shrink-0" />
                                <Link href="tel:+15551234567" className="hover:text-teal-500 transition-colors">
                                    +1 (555) 123-4567
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-teal-500 flex-shrink-0" />
                                <Link href="mailto:info@estatevue.com" className="hover:text-teal-500 transition-colors">
                                    info@estatevue.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} EstateVue. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
                        <Link href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-teal-500 transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
