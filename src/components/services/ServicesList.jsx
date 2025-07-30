export function ServicesList({ title, services }) {
    if (services.length === 0) {
        return (
            <div>
                <h1 className="display-1">{title}</h1>
                <p>Empty list 🚩</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="display-1">{title}</h1>
            <ul className="ms-3 mt-3">
                {services.map(service => <li key={service.id} className="fs-4">{service.id}) {service.value}</li>)}
            </ul>
        </div>
    );
}