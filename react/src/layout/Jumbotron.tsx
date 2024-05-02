interface Props {
    title: string;
    text: string;
}
export function Jumbotron(props: Props) {
    return (
        <>
            <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                <div className="col-lg-6 px-0">
                    <h1 className="display-4 fst-italic">{props.title}</h1>
                    <p className="lead my-3">{props.text}</p>
                    <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a>
                    </p>
                </div>
            </div>
        </>
    );
}
