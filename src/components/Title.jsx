export function Title({ text, desc }) {
    return (
        <div>
            <h1>{text}</h1>
            {desc ? <p>{desc}</p> : null}
            {desc && <p>{desc}</p>}
        </div>
    );
}