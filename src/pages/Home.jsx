import { TextList } from "../components/text-list/TextList";

export function Home() {
    const list = ['Pomidoras', 'Agurkas', 'Svogunas', 'Cesnakas', 'Bulve'];

    return (
        <main>
            <section className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <TextList />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-5 ms-3">
                        <ul>{list.map(text => <li key={text}>{text}</li>)}</ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE 1
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE 2
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE 3
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE 4
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE 5
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                        HOME PAGE 6
                    </div>
                </div>
            </section>
        </main>
    );
}