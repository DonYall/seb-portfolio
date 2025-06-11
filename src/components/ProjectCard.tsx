import { FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, description, imageUrl, link }: { title: string; description: string; imageUrl: string; link: string }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          View Project <FaExternalLinkAlt className="inline ml-1" />
        </a>
      </div>
    </div>
  );
}
