import { useParams } from "react-router";

export function Error404() {
    let { '*': splat } = useParams();

    return (
        <main>
            ERROR 404 PAGE - {splat}
        </main>
    );
}