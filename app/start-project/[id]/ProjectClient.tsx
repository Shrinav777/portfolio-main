"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Calendar,
    Users,
    TrendingUp,
    Award,
    CheckCircle,
    Play,
    Zap,
    Target,
    BarChart3,
    MessageCircle,
    Globe,
    Palette,
    Cpu,
    BrainCircuit,
    Code,
    Database,
    Mail,
    ChevronLeft
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

export default function ProjectClient({ project }: { project: any }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const headerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/start-project">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ChevronLeft className="w-4 h-4" />
                            Back to Projects
                        </Button>
                    </Link>
                    <div className="flex gap-4">
                        <Button size="sm" variant="outline" className="hidden sm:flex gap-2">
                            <Github className="w-4 h-4" /> Code
                        </Button>
                        <Button size="sm" className="gap-2 bg-lime-500 hover:bg-lime-600">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </Button>
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    {/* Header Section */}
                    <motion.div style={{ opacity, scale }} ref={headerRef} className="mb-12">
                        <Badge className="mb-4 bg-lime-100 text-lime-700 hover:bg-lime-100 border-none">
                            {project.category}
                        </Badge>
                        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 border shadow-2xl">
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <Card className="border-2 border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                                <CardContent className="p-8">
                                    <h3 className="text-xl font-bold mb-6">Project Overview</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between py-2 border-b">
                                            <span className="text-gray-500">Client</span>
                                            <span className="font-medium">{project.client || "Confidential"}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b">
                                            <span className="text-gray-500">Year</span>
                                            <span className="font-medium">{project.year || "2024"}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}