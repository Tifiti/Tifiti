import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Layout, Laptop, Lightbulb, Monitor, Smartphone, Zap, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import BlogPreview from "@/components/blog-preview"
import ServiceCard from "@/components/service-card"
import ContactForm from "@/components/contact-form"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <Link href="/" className="text-xl font-bold">
              Tifiti Network
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium">
              Services
            </Link>
            <Link href="#work" className="text-sm font-medium">
              Work
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="border-purple-200 bg-purple-100 text-purple-900 hover:bg-purple-100 hover:text-purple-900">
                    Web & App Development • UX Design • Digital Innovation
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Building digital experiences that{" "}
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      transform businesses
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We create cutting-edge web applications, mobile solutions, and user experiences that drive growth and innovation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#services">
                      Explore our services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#contact">Contact us</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full relative"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Expertise</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comprehensive Digital Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From concept to deployment, we deliver end-to-end solutions tailored to your business needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard 
                icon={<Monitor className="h-10 w-10 text-purple-600" />}
                title="Web Development"
                description="Custom websites and web applications built with modern frameworks and best practices."
                features={["React & Next.js", "Full-stack solutions", "E-commerce", "CMS integration"]}
              />
              <ServiceCard 
                icon={<Smartphone className="h-10 w-10 text-purple-600" />}
                title="App Development"
                description="Native and cross-platform mobile applications for iOS and Android."
                features={["React Native", "Flutter", "iOS & Android", "App Store optimization"]}
              />
              <ServiceCard 
                icon={<Layout className="h-10 w-10 text-purple-600" />}
                title="UX Design"
                description="User-centered design that creates intuitive and engaging digital experiences."
                features={["User research", "Wireframing", "Prototyping", "Usability testing"]}
              />
              <ServiceCard 
                icon={<Code className="h-10 w-10 text-purple-600" />}
                title="Custom Software"
                description="Bespoke software solutions designed to solve your unique business challenges."
                features={["API development", "System integration", "Legacy modernization", "Cloud solutions"]}
              />
              <ServiceCard 
                icon={<Laptop className="h-10 w-10 text-purple-600" />}
                title="Digital Transformation"
                description="Strategic guidance to help businesses evolve in the digital landscape."
                features={["Digital strategy", "Process automation", "Technology consulting", "Innovation workshops"]}
              />
              <ServiceCard 
                icon={<Lightbulb className="h-10 w-10 text-purple-600" />}
                title="Product Strategy"
                description="Turning ideas into viable digital products with clear roadmaps and execution plans."
                features={["Market research", "MVP development", "Product roadmapping", "Growth strategies"]}
              />
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Portfolio</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our recent work and see how we've helped businesses achieve their digital goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Project 1"
                  className="aspect-video object-cover"
                />
                <CardHeader>
                  <CardTitle>E-commerce Platform</CardTitle>
                  <CardDescription>Custom online store with integrated payment processing and inventory management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Technologies: Next.js, Stripe, Prisma, PostgreSQL
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Project 2"
                  className="aspect-video object-cover"
                />
                <CardHeader>
                  <CardTitle>Healthcare Mobile App</CardTitle>
                  <CardDescription>Patient management system with telemedicine capabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Technologies: React Native, Firebase, WebRTC
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Project 3"
                  className="aspect-video object-cover"
                />
                <CardHeader>
                  <CardTitle>SaaS Dashboard</CardTitle>
                  <CardDescription>Analytics platform with real-time data visualization</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Technologies: React, D3.js, Node.js, MongoDB
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Project 4"
                  className="aspect-video object-cover"
                />
                <CardHeader>
                  <CardTitle>Fintech Application</CardTitle>
                  <CardDescription>Personal finance management tool with budgeting features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Technologies: Vue.js, Express, PostgreSQL
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tech Blog</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Latest Insights</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest trends, technologies, and best practices in web development and UX design.
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="development">Development</TabsTrigger>
                  <TabsTrigger value="design">UX Design</TabsTrigger>
                  <TabsTrigger value="tech">Tech News</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <BlogPreview 
                    title="The Future of Web Development: What to Expect in 2025"
                    excerpt="Explore emerging trends and technologies that will shape the web development landscape in the coming year."
                    date="June 1, 2025"
                    category="Development"
                    image="/placeholder.svg?height=200&width=300"
                  />
                  <BlogPreview 
                    title="Designing for Accessibility: Best Practices"
                    excerpt="Learn how to create inclusive digital experiences that work for everyone, regardless of ability."
                    date="May 28, 2025"
                    category="UX Design"
                    image="/placeholder.svg?height=200&width=300"
                  />
                  <BlogPreview 
                    title="Building Performant React Applications"
                    excerpt="Tips and techniques for optimizing React applications for speed and efficiency."
                    date="May 22, 2025"
                    category="Development"
                    image="/placeholder.svg?height=200&width=300"
                  />
                </div>
              </TabsContent>
              <TabsContent value="development" className="mt-6">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <BlogPreview 
                    title="The Future of Web Development: What to Expect in 2025"
                    excerpt="Explore emerging trends and technologies that will shape the web development landscape in the coming year."
                    date="June 1, 2025"
                    category="Development"
                    image="/placeholder.svg?height=200&width=300"
                  />
                  <BlogPreview 
                    title="Building Performant React Applications"
                    excerpt="Tips and techniques for optimizing React applications for speed and efficiency."
                    date="May 22, 2025"
                    category="Development"
                    image="/placeholder.svg?height=200&width=300"
                  />
                  <BlogPreview 
                    title="Serverless Architecture: When to Use It"
                    excerpt="Understanding the benefits and limitations of serverless architecture for modern applications."
                    date="May 15, 2025"
                    category="Development"
                    image="/placeholder.svg?height=200&width=300"
                  />
                </div>
              </TabsContent>
              <TabsContent value="design" className="mt-6">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <BlogPreview 
                    title="Designing for Accessibility: Best Practices"
                    excerpt="Learn how to create inclusive digital experiences that work for everyone, regardless of ability."
                    date="May 28, 2025"
                    category="UX Design"
                    image="/placeholder.svg?height=200&width=300"
                  />
                  <BlogPreview 
                    title="The Psychology of Color in UI Design"
                    excerpt="How color choices impact user perception and behavior in digital interfaces."
                    date="May 18, 2025"
                    category="UX Design"
                    image="/placeholder.svg?height=200&width=300"
                  />
                  <BlogPreview 
                    title="Effective User Research Methods"
                    excerpt="A guide to gathering meaningful insights that inform better design decisions."
                    date="May 10, 2025"
                    category="UX Design"
                    image="/placeholder.svg?height=200&width=300"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tech" className="mt-6">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <BlogPreview 
                    title="AI in Web Development: Current Applications"
                    excerpt="How artificial intelligence is transforming the way we build and interact with websites."
                    date="May 25, 2025"
                    category="Tech News"
                    image="/placeholder.svg?height=200&width=300"
                  />
                  <BlogPreview 
                    title="The Rise of Edge Computing"
                    excerpt="Understanding how edge computing is changing application architecture and performance."
                    date="May 20, 2025"
                    category="Tech News"
                    image="/placeholder.svg?height=200&width=300"
                  />
                  <BlogPreview 
                    title="Web3 and the Future of the Internet"
                    excerpt="Exploring the potential impact of decentralized technologies on the web."
                    date="May 12, 2025"
                    category="Tech News"
                    image="/placeholder.svg?height=200&width=300"
                  />
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/blog">View all articles <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Start Your Project</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to bring your digital vision to life? Contact us to discuss your project.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl grid gap-8 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hello@tifiti.net</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Website</p>
                      <p className="text-sm text-muted-foreground">tifiti.net</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Tifiti Network</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building exceptional digital experiences that drive business growth.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Connect</h3>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d=\"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0
