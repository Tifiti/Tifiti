import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPreviewProps {
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export default function BlogPreview({ title, excerpt, date, category, image }: BlogPreviewProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          href={`/blog/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-sm font-medium flex items-center hover:text-purple-600"
        >
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
