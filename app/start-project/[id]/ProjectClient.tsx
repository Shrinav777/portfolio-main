// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import {
//     ArrowLeft,
//     ExternalLink,
//     Github,
//     Calendar,
//     Users,
//     TrendingUp,
//     Award,
//     CheckCircle,
//     Play,
//     Zap,
//     Target,
//     BarChart3,
//     MessageCircle,
//     Globe,
//     Palette,
//     Cpu,
//     BrainCircuit,
//     Code,
//     Database,
//     Mail,
//     ChevronLeft
// } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import { useRef, useState, useEffect } from "react"

// export default function ProjectClient({ project }: { project: any }) {
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const headerRef = useRef(null)
//     const { scrollYProgress } = useScroll({
//         target: headerRef,
//         offset: ["start start", "end start"]
//     })

//     const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
//     const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

//     return (
//         <div className="min-h-screen bg-white">
//             {/* Navigation */}
//             <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
//                 <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//                     <Link href="/start-project">
//                         <Button variant="ghost" size="sm" className="gap-2">
//                             <ChevronLeft className="w-4 h-4" />
//                             Back to Projects
//                         </Button>
//                     </Link>
//                     <div className="flex gap-4">
//                         <Button size="sm" variant="outline" className="hidden sm:flex gap-2">
//                             <Github className="w-4 h-4" /> Code
//                         </Button>
//                         <Button size="sm" className="gap-2 bg-lime-500 hover:bg-lime-600">
//                             <ExternalLink className="w-4 h-4" /> Live Demo
//                         </Button>
//                     </div>
//                 </div>
//             </nav>

//             <main className="pt-24 pb-16">
//                 <div className="container mx-auto px-4">
//                     {/* Header Section */}


//                     {/* Project Details Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12">


//                         <div className="md:col-span-2">
//                             <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 border shadow-2xl">
//                                 {project.image && (
//                                     <Image
//                                         src={project.image}
//                                         alt={project.title}
//                                         fill
//                                         className="object-cover"
//                                     />
//                                 )}
//                             </div>
//                         </div>
//                     </div>

//                     <div className="space-y-8">
//                         <Card className="border-2 border-gray-100 rounded-3xl overflow-hidden shadow-sm">
//                             <CardContent className="p-8">
//                                 <h3 className="text-xl font-bold mb-6">Project Overview</h3>
//                                 <div className="space-y-4">
//                                     <div className="flex justify-between py-2 border-b">
//                                         <span className="text-gray-500">Client</span>
//                                         <span className="font-medium">{project.client || "Confidential"}</span>
//                                     </div>
//                                     <div className="flex justify-between py-2 border-b">
//                                         <span className="text-gray-500">Year</span>
//                                         <span className="font-medium">{project.year || "2024"}</span>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ChevronLeft,
    Github,
    ExternalLink,
    Calendar,
    Users,
    Clock,
    CheckCircle,
    Zap,
    Target,
    BarChart3,
    ImageIcon
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"

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
        <div className="min-h-screen bg-white text-gray-900">

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ChevronLeft className="w-4 h-4" />
                            Back to Home
                        </Button>
                    </Link>

                    <div className="flex gap-4">
                        {project.githubUrl && (
                            <Button size="sm" variant="outline" className="hidden sm:flex gap-2">
                                <Github className="w-4 h-4" /> Code
                            </Button>
                        )}
                        {project.liveUrl && (
                            <Button size="sm" className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-black">
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </Button>
                        )}
                    </div>
                </div>
            </nav>

            <main className="pt-24 pb-16">

                {/* HERO SECTION WITH GRADIENT */}
                <section
                    className={`rounded-3xl mx-4 md:mx-16 p-10 mb-16 shadow-xl bg-gradient-to-br ${project.bgGradient}`}
                >
                    <motion.div style={{ opacity, scale }} ref={headerRef}>
                        <Badge className="mb-4 bg-white/70 text-gray-900 border-none px-4 py-1 text-sm">
                            {project.category}
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                            {project.title}
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-6">
                            <Badge className="bg-yellow-500 text-black px-4 py-1">
                                {project.status}
                            </Badge>
                            <Badge className="bg-black text-white px-4 py-1">
                                {project.year}
                            </Badge>
                        </div>
                    </motion.div>
                </section>

                <div className="container mx-auto px-4 space-y-16">

                    {/* MAIN IMAGE */}
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border bg-gray-100">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* PROJECT OVERVIEW */}
                    <Card className="border-2 border-gray-100 rounded-3xl shadow-sm">
                        <CardContent className="p-8 space-y-6">
                            <h3 className="text-2xl font-bold">Project Overview</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Client</span>
                                    <span className="font-medium">{project.client}</span>
                                </div>

                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Duration</span>
                                    <span className="font-medium">{project.duration}</span>
                                </div>

                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Team</span>
                                    <span className="font-medium">{project.team}</span>
                                </div>

                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-gray-500">Year</span>
                                    <span className="font-medium">{project.year}</span>
                                </div>

                            </div>
                        </CardContent>
                    </Card>

                    {/* CHALLENGE & SOLUTION */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        <Card className="rounded-3xl border shadow-sm">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-yellow-500" />
                                    Challenge
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                            </CardContent>
                        </Card>

                        <Card className="rounded-3xl border shadow-sm">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                                    Solution
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                            </CardContent>
                        </Card>

                    </div>

                    {/* FEATURES */}
                    <section>
                        <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                        <div className="space-y-4">
                            {project.features.map((feature: string, index: number) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <Zap className="w-5 h-5 text-yellow-500 mt-1" />
                                    <p className="text-gray-700">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* TECHNOLOGIES */}
                    <section>
                        <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech: string, index: number) => (
                                <Badge
                                    key={index}
                                    className="px-4 py-2 bg-black text-white rounded-full text-sm"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </section>

                    {/* RESULTS */}
                    <section>
                        <h3 className="text-2xl font-bold mb-6">Results</h3>
                        <div className="space-y-4">
                            {project.results.map((result: string, index: number) => (
                                <div key={index} className="flex gap-3 items-start">
                                    <BarChart3 className="w-5 h-5 text-yellow-500 mt-1" />
                                    <p className="text-gray-700">{result}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* GALLERY */}
                    <section>
                        <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {project.gallery.map((img: string, index: number) => (
                                <div
                                    key={index}
                                    className="relative aspect-video rounded-2xl overflow-hidden border shadow-md bg-gray-100"
                                >
                                    <Image src={img} alt="Gallery" fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    )
}
