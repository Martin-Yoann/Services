import Link from "next/link";
import PageHeader from "@/app/components/PageHeader";
import { LEGAL_VERSION } from "@/app/data/legal";

type Block = { type: string; level?: string | null; text?: string; rows?: string[][] };

function LinkedText({ text }: { text: string }) {
  return text.split(/(https?:\/\/[^\s;)]+|Support@happyglobalservice\.com)/g).map((part, index) => {
    const href = part === "Support@happyglobalservice.com" ? `mailto:${part}` : part.startsWith("https://") || part.startsWith("http://") ? part : null;
    return href ? <a key={index} href={href} className="underline underline-offset-2 break-words hover:text-[#D96C57]">{part}</a> : part;
  });
}

export default function LegalDocument({ title, path, blocks }: { title: string; path: string; blocks: Block[] }) {
  return <>
    <PageHeader title={title} breadcrumb={[{ label: "Home", href: "/" }, { label: title, href: path }]} />
    <section className="bg-white py-12 md:py-20">
      <article className="container mx-auto max-w-4xl px-6 text-sm leading-7 text-slate-700">
        <p className="mb-8 text-xs text-slate-500">Website publication: October 30, 2026 · Version: {LEGAL_VERSION}</p>
        <nav aria-label={`${title} contents`} className="mb-10 border-y border-slate-200 py-6">
          <p className="mb-3 font-semibold text-slate-900">Contents</p>
          <ul className="grid gap-x-8 gap-y-2 md:grid-cols-2">
            {blocks.map((block, index) => block.type === "heading" && index > 0 && block.level !== "3" ? <li key={index}><Link href={`#section-${index}`} className="underline-offset-4 hover:underline">{block.text}</Link></li> : null)}
          </ul>
        </nav>
        {blocks.map((block, index) => {
          if (block.type === "heading") {
            const Heading = block.level === "3" ? "h3" : "h2";
            return <Heading key={index} id={`section-${index}`} className={`scroll-mt-28 font-bold text-slate-900 ${block.level === "3" ? "mt-7 mb-3 text-base" : "mt-10 mb-4 text-xl"}`}>{block.text}</Heading>;
          }
          if (block.type === "table") return <div key={index} className="my-6 overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><tbody>{block.rows?.map((row, rowIndex) => <tr key={rowIndex} className="border-b border-slate-200">{row.map((cell, columnIndex) => columnIndex === 0 ? <th key={columnIndex} scope="row" className="w-[30%] min-w-24 align-top py-3 pr-5 font-semibold text-slate-900"><LinkedText text={cell} /></th> : <td key={columnIndex} className="align-top py-3 break-words whitespace-pre-line"><LinkedText text={cell} /></td>)}</tr>)}</tbody></table></div>;
          if (block.type === "bullet") return <ul key={index} className="my-2 list-disc pl-6"><li><LinkedText text={block.text || ""} /></li></ul>;
          return <p key={index} className="my-4 whitespace-pre-line break-words"><LinkedText text={block.text || ""} /></p>;
        })}
      </article>
    </section>
  </>;
}
