import { useParams } from "react-router";

export function ServiceInner() {
    const { service } = useParams();

    return (
        <main>
            SERVICE INNER PAGE - {service}
        </main>
    );
}