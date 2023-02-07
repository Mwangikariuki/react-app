interface Props {
  share: () => void;
  export: () => void;
  children?: any;
  title: string;
}

const Layout = (props: Props) => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{props.title}</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button
              type="button"
              onClick={props.share}
              className="btn btn-sm btn-outline-secondary"
            >
              Share
            </button>
            <button
              type="button"
              onClick={props.export}
              className="btn btn-sm btn-outline-secondary"
            >
              Export
            </button>
          </div>
        </div>
      </div>
      {props.children}
    </main>
  );
};

export default Layout;
