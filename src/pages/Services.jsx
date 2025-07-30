import { useState } from "react";
import { ServicesList } from "../components/services/ServicesList";

export function Services() {
    const [vegetablesId, setVegetablesId] = useState(1);
    const [vegetablesList, setVegetablesList] = useState([]);
    const [text, setText] = useState('');

    const [id, setId] = useState(5);
    const [list, setList] = useState([
        { id: 1, value: 'design' },
        { id: 2, value: 'development' },
        { id: 3, value: 'management' },
        { id: 4, value: 'ux' },
    ]);

    function handleClick() {
        // setList(currentList => currentList.concat(
        //     { id: id, value: 'aaaaaaaa' }
        // ));
        setList(currentList => [...currentList, { id: id, value: 'aaaaaaaa' }]);
        setId(n => n + 1);
    }

    function handleInputChange(e) {
        setText(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setVegetablesList(veges => [...veges, { id: vegetablesId, value: text }]);
        setVegetablesId(id => id + 1);
        setText('');
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 mb-5">
                        <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-3 form">
                            <label className="form-label" htmlFor="text">New vegetable name</label>
                            <input onChange={handleInputChange} value={text} className="form-control" id="text" type="text" />
                            <button className="btn btn-primary" type="submit">Add</button>
                        </form>
                        <ServicesList title='Darzoves' services={vegetablesList} />
                    </div>

                    <div className="col-12 mb-5">
                        <hr />
                    </div>

                    <div className="col-12 col-lg-6">
                        <button onClick={handleClick} className="btn btn-primary">Prideti nauja paslauga</button>
                        <ServicesList title='My Services' services={list} />
                    </div>
                </div>
            </div>
        </main>
    );
}