import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighLighter } from "react-syntax-highlighter";
import atomDark  from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighLighter.registerLanguage('js',js)
SyntaxHighLighter.registerLanguage('css',css)



function PostContent({ content }) {
  const imagePath = `/images/posts/${content.slug}/${content.image}`;

  const customComponents = {
    p(paragraph) {
      const component = paragraph.children[3];

      if (component?.type === "img") {
        const { src, alt } = component?.props;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${content?.slug}/${src}`}
              alt={alt}
              width="600"
              height="300"
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    code({ className, children }) {
      const lang = className.split("-")[1];

      return (
        <SyntaxHighLighter
          language={lang}
          children={children}
          style={atomDark}
        ></SyntaxHighLighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={content.title} />
      <ReactMarkdown components={customComponents}>
        {content.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
