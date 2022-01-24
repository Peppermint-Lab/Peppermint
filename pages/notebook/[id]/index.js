import { useRouter } from "next/router";
import { useQuery } from "react-query";
import dynamic from "next/dynamic";

import "@uiw/react-markdown-preview/markdown.css";

const MD = dynamic(() => import("../../../components/MarkdownEditor"), {
  ssr: false,
});

export default function ViewNoteBook() {
  const router = useRouter();

  async function getMarkdown() {
    const res = await fetch(`/api/v1/note/${router.query.id}`);
    return res.json();
  }

  const { data, status, error } = useQuery("viewMarkdown", getMarkdown);

  return (
    <div>
      {status === "success" && (
        <div>
          {/* <MDEditor value={data.data.note} height="80vh"   /> */}
          <MD data={data.data.note} />
        </div>
      )}
    </div>
  );
}