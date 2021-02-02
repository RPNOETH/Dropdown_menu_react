import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './app.css';

function Link(props) {
  return (
    <a href="#om" className="text-main ref-link">
      <div>
        <i className={props.icon + ' fa-lg primary-icon'}></i>
        <i className={props.icon + ' fa-lg secondary-icon'}></i>
      </div>
      <div>
        <h4 className="m-0 p-0" beforeData={props.text}>
          {props.text}
        </h4>
      </div>
    </a>
  );
}

function App() {
  return (
    <div className="d-flex flex-column bg-background py-3" style={{ borderRadius: '20px', width: '30%' }}>
      <Link icon="fas fa-home" text="Home" />
      <Link icon="fas fa-users" text="Profiles" />
      <Link icon="fas fa-images" text="Images" />
      <Link icon="fas fa-trash" text="Delete" />
    </div>
  );
}

export default App;
