export function ColorBlock({ colorData }) {
    return (
        <li>
            <div className="number">{colorData.index}</div>
            <div className="name">{colorData.name}</div>
            <div className="color"
                style={{
                    backgroundColor: colorData.color
                }}></div>
        </li >
    );
}