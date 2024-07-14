import React from "react";
import { Play, Pause } from "lucide-react";
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "../../../ui/card";
import { cn } from "../../../../lib/utils";
import { Badge } from "../../../ui/badge";
import Container from "../../../common/Container";

const SectionDetails = (props) => {
 const splitTextIntoParagraphs = (text) => {
  const paragraphs = text.split(/[\n]+/);
  return paragraphs.map((paragraph, index) => (
   <p
    key={index}
    className={cn("text-gray-700", "leading-relaxed", "mb-4", {
     "indent-8": index === 0 && paragraphs.length > 1,
    })}
   >
    {paragraph.trim()}
   </p>
  ));
 };

 return (
  <Container>
   <Card className="w-full bg-transparent">
    <CardHeader>
     <CardTitle>
      <h1 className="text-2xl">{props.title}</h1>
     </CardTitle>
    </CardHeader>
    <CardContent>
     {props.imgUrl && (
      <img
       src={props.imgUrl}
       alt={props.title}
       className="rounded-lg mb-4 w-1/2"
      />
     )}
     {props.videoUrl && (
      <div className="relative w-full md:w-2/3">
       <video
        ref={props.videoRef}
        src={props.videoUrl}
        className="rounded-lg mb-4 w-full"
        controls
       />
       <div
        className={cn(
         "absolute top-[40%] left-0 w-full flex items-center justify-center",
         {
          "opacity-1 transition-opacity duration-1000": props.showPlayButton,
          "opacity-0 transition-opacity duration-1000": !props.showPlayButton,
         },
        )}
       >
        <button
         className={cn(
          "bg-gray-800 text-white rounded-full p-4 hover:block transition-all",
         )}
         onClick={props.handlePlayPause}
        >
         {props.isPlaying ? <Pause /> : <Play />}
        </button>
       </div>
      </div>
     )}
     <CardDescription className="text-md">
      {splitTextIntoParagraphs(props.body)}
     </CardDescription>
    </CardContent>
    <CardFooter>
     <Badge>Published on {props.date}</Badge>
    </CardFooter>
   </Card>
  </Container>
 );
};

export default SectionDetails;
