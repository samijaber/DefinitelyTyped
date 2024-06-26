import * as React from "react";
import Highlighter, { FindChunks } from "react-highlight-words";

const findChunks = ({
    searchWords,
    textToHighlight,
}: FindChunks) => [];

const CustomHighlight: React.FC<{ children?: React.ReactNode }> = ({ children }) => <span>{children}</span>;
const CustomUnhighlight: React.FC<{ children?: React.ReactNode }> = ({ children }) => <span>{children}</span>;

class HighlighterTest extends React.Component {
    render() {
        return (
            <div>
                <Highlighter
                    highlightTag="span"
                    searchWords={[/hello/ig, "or"]}
                    textToHighlight="Hello World"
                    customProp="My Custom Prop"
                />
                <Highlighter
                    highlightTag="span"
                    searchWords={["el", "or"]}
                    textToHighlight="Hello World"
                    customProp="My Custom Prop"
                />
                <Highlighter
                    activeClassName="activeClassName"
                    activeIndex={1}
                    activeStyle={{ color: "red" }}
                    autoEscape={true}
                    className="className"
                    caseSensitive={true}
                    findChunks={findChunks}
                    highlightClassName="highlightClassName"
                    highlightStyle={{ color: "red" }}
                    highlightTag={CustomHighlight}
                    sanitize={(text: string) => text}
                    searchWords={["el", "or"]}
                    textToHighlight="Hello World"
                    unhighlightClassName="unhighlightClassName"
                    unhighlightStyle={{ color: "red" }}
                />
                <Highlighter
                    activeClassName="activeClassName"
                    activeIndex={1}
                    activeStyle={{ color: "red" }}
                    autoEscape={true}
                    className="className"
                    caseSensitive={true}
                    findChunks={findChunks}
                    highlightClassName="highlightClassName"
                    highlightStyle={{ color: "red" }}
                    highlightTag={CustomHighlight}
                    sanitize={(text: string) => text}
                    searchWords={["el", "or"]}
                    textToHighlight="Hello World"
                    unhighlightClassName="unhighlightClassName"
                    unhighlightStyle={{ color: "red" }}
                    unhighlightTag={CustomUnhighlight}
                />
            </div>
        );
    }
}
