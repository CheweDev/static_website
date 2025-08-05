import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, User } from "lucide-react";

const BlogPosts = ({ posts }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles & Guides
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your business with actionable strategies and valuable
            insights from our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-60 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.image || "https://placehold.co/600x400"}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <Badge className="absolute rounded-full top-4 left-4 bg-blue-600 text-white">
                  {post.category}
                </Badge>
              </div>

              <div className="flex flex-col flex-grow">
                <CardHeader className="pb-4 flex-grow">
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <Button className="w-full btn-rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                    Read Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
