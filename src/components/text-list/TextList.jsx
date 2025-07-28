import { ColorBlock } from './ColorBlock';
import './TextList.css';

export function TextList() {
    const data = [
        { index: 1, name: 'Geltona', color: '#FDB913' },
        { index: 2, name: 'Žalia', color: '#006A44' },
        { index: 3, name: 'Raudona', color: '#C1272D' },
    ];

    return (
        <div className="text-list">
            <p className='title'>Spalvos:</p>
            <ul>{data.map(item => <ColorBlock key={item.index} colorData={item} />)}</ul>
        </div>
    );
}