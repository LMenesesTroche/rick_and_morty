import "./styles.css";
import {stylesLine} from './stylesLine'
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, status, gender, species, origin, image, onClose } = props;

  return (
    <div className='container'>
      <img
        src={image}
        alt='foto'
        height={200}
        width={200}
        style={stylesLine.img}
      />
      <Link  to={`/detail/${props.id}`}>
        <h1
         style={{
           backgroundColor: "#08B2C9",
           fontSize: 16,
          }}
        >
          {name}
        </h1>
      </Link>
      
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin.name}</h2>
      </div>
      <button
        onClick={() => onClose(props.id)}
        style={{
          position: "absolute",
          top: 8,
          right: 6,
        }}
      >
        X
      </button>
    </div>
  );
}