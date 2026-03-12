import Image from "next/image";
import Link from "next/link";

export default function StoryCard({ story }) {
  const shortStory = story.story.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full group">
      {/* Header Area */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative h-14 w-14 flex-shrink-0">
          <Image
            width={96}
            height={96}
            src={story.image}
            alt={story.name}
            className="rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border-2 border-slate-800"
          />
        </div>
        <div className="overflow-hidden">
          <h2 className="font-bold text-slate-100 text-lg truncate">
            {story.name}
          </h2>
          <p className="text-xs text-slate-400 truncate">{story.designation}</p>
          <p className="text-xs font-semibold text-cyan-500 truncate">
            {story.company}
          </p>
        </div>
      </div>

      {/* Story Excerpt */}
      <p className="text-slate-400 text-sm leading-relaxed flex-grow">
        {shortStory}
      </p>

      {/* Action Button */}
      <div className="mt-6">
        <Link
          href={`/stories/${story.id}`}
          className="inline-flex items-center justify-center w-full bg-slate-800 hover:bg-cyan-600 text-white font-medium py-2.5 rounded-xl text-sm transition-all group-hover:shadow-[0_0_20px_rgba(8,145,178,0.2)]"
        >
          Read Full Story
          <span className="ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
