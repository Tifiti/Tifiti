import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search } from "lucide-react"
import Link from "next/link"
import BlogPreview from "@/components/blog-preview"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              Tifiti Network
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/#services" className="text-sm font-medium">
              Services
            </Link>
            <Link href="/#work" className="text-sm font-medium">
              Work
            </Link>
            <Link href="/blog" className="text-sm font-medium">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="container py-12 md:py-16">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
          <div>
            <Button variant="ghost" size="sm" asChild className="mb-2">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Tech Blog</h1>
            <p className="text-muted-foreground mt-2">Insights, tutorials, and news from the Tifiti Network team</p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="w-full md:w-[300px] pl-8" />
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="mt-8">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Posts</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="design">UX Design</TabsTrigger>
            <TabsTrigger value="tech">Tech News</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <BlogPreview
                title="The Psychology of Color in UI Design"
                excerpt="How color choices impact user perception and behavior in digital interfaces."
                date="May 18, 2025"
                category="UX Design"
                image="/placeholder.svg?height=200&width=300"
              />
              <BlogPreview
                title="Serverless Architecture: When to Use It"
                excerpt="Understanding the benefits and limitations of serverless architecture for modern applications."
                date="May 15, 2025"
                category="Development"
                image="/placeholder.svg?height=200&width=300"
              />
              <BlogPreview
                title="Effective User Research Methods"
                excerpt="A guide to gathering meaningful insights that inform better design decisions."
                date="May 10, 2025"
                category="UX Design"
                image="/placeholder.svg?height=200&width=300"
              />
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
          <TabsContent value="development">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          <TabsContent value="design">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          <TabsContent value="tech">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </main>
      <footer className="w-full border-t py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Tifiti Network. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
