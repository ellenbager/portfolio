import parse from "html-react-parser";

export default function Komponent( {post} ) {


    return (
        <article className="h2">
            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}
        </article>
    );
}