import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  authorName: string;
  authorAvatarUrl?: string;
  lastModified: string;
  category?: string;
  onClick?: () => void;
}

const CourseCard = ({
  id = "1",
  title = "Introduction to Algebra",
  description = "Learn the fundamentals of algebra including equations, inequalities, and graphing functions.",
  thumbnail = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  authorName = "Nathaniel Paz",
  authorAvatarUrl,
  lastModified = "April 15, 2023",
  category = "Mathematics",
  onClick,
}: CourseCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/courses/${id}`);
    }
  };

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer bg-white h-full flex flex-col"
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {category && (
          <Badge className="absolute top-3 right-3 bg-primary/90">
            {category}
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-gray-800">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 flex items-center gap-1">
          <CalendarIcon className="h-3 w-3" /> Last updated: {lastModified}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>

      <CardFooter className="pt-2 border-t flex items-center">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage
            src={
              authorAvatarUrl ||
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${authorName}`
            }
            alt={authorName}
          />
          <AvatarFallback>
            {authorName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-gray-700">{authorName}</span>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
