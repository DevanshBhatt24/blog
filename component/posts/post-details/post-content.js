import classes from "./post-content.module.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostHeaders from "./post-headers";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export default function PostContent(props) {
  function customParagraph(p) {
    const { node } = p;
    if (node.children[0].type === "element") {
      const image = node.children[0];
      return (
        <div className={classes.image}>
          <Image
            src={image.properties.src}
            alt={image.properties.alt}
            width={600}
            height={300}
          />
        </div>
      );
    }
    return <p>{p.children}</p>;
  }
  function customCode(code) {
    const { className, children } = code;
    const language = className.substring(9, className.length);

    return (
      <SyntaxHighlighter
        language={language}
        children={children}
        style={atomDark}
      />
    );
  }
  const { postcontent } = props;
  return (
    <article className={classes.content}>
      <PostHeaders title={postcontent.title} image={postcontent.image} />
      <ReactMarkdown
        components={{
          p: customParagraph,
          code: customCode,
        }}
      >
        {postcontent.content}
      </ReactMarkdown>
    </article>
  );
}
