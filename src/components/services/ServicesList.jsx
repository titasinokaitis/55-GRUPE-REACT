export function ServicesList({ services }) {
    return (
        <div>
            <h1 className="display-1">My services</h1>
            <ul className="ms-3 mt-3">
                {services.map(service => <li key={service.id} className="fs-4">{service.id}) {service.value}</li>)}
            </ul>
        </div>
    );
}