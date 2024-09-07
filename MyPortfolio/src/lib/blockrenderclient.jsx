import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({ content }) {
  if (!content) return null;
  return <BlocksRenderer content={content} 
//   blocks={{
//     heading:({children, level}) => {
//         switch(level) {
//             case 1:
//               return <h3 className="text-6xl font-bold" variant="h3">{children}</h3>
//             default:
//               return <h1 variant="h1">{children}</h1>
//         }
//     }
//   }} 
  />;
}
