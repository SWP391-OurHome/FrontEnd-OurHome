import { useState } from "react"
import Link from "next/link"
import { Home, Search, Heart, MessageSquare, User, Menu, Bell } from "lucide-react"


const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Buy", href: "/properties?type=buy" },
    { name: "Rent", href: "/rent" },
    { name: "Sell", href: "/sell" },
    { name: "Agents", href: "/agents" },
    { name: "About", href: "/about" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from auth context
    const [notifications] = useState(3) // This would come from notifications context

    return (
        <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Home className="h-8 w-8 text-teal-700" />
                        <span className="text-xl font-serif font-bold text-teal-800">EstateVue</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* User Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/search">
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search properties</span>
                            </Link>
                        </Button>

                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/favorites">
                                <Heart className="h-5 w-5" />
                                <span className="sr-only">Favorite properties</span>
                            </Link>
                        </Button>

                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/messages">
                                <MessageSquare className="h-5 w-5" />
                                <span className="sr-only">Messages</span>
                            </Link>
                        </Button>

                        {isLoggedIn ? (
                            <>
                                <Button variant="ghost" size="icon" className="relative" asChild>
                                    <Link href="/notifications">
                                        <Bell className="h-5 w-5" />
                                        {notifications > 0 && (
                                            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                                                {notifications}
                                            </Badge>
                                        )}
                                        <span className="sr-only">Notifications</span>
                                    </Link>
                                </Button>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon">
                                            <User className="h-5 w-5" />
                                            <span className="sr-only">User menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem asChild>
                                            <Link href="/profile">Profile</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/dashboard">Dashboard</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href="/transactions">Transaction History</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Logout</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Button variant="outline" asChild>
                                    <Link href="/login">Sign In</Link>
                                </Button>
                                <Button asChild>
                                    <Link href="/register">Register</Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <div className="flex flex-col space-y-4 mt-4">
                                {navigationLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-gray-700 hover:text-teal-700 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="pt-4 border-t">
                                    {isLoggedIn ? (
                                        <div className="space-y-2">
                                            <Button variant="outline" className="w-full" asChild>
                                                <Link href="/profile">Profile</Link>
                                            </Button>
                                            <Button variant="outline" className="w-full" asChild>
                                                <Link href="/dashboard">Dashboard</Link>
                                            </Button>
                                            <Button variant="destructive" className="w-full">
                                                Logout
                                            </Button>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <Button variant="outline" className="w-full" asChild>
                                                <Link href="/login">Sign In</Link>
                                            </Button>
                                            <Button className="w-full" asChild>
                                                <Link href="/register">Register</Link>
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
