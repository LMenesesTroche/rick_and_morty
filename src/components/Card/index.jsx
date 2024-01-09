import "./Card.module.css";
import {stylesLine} from './stylesLine'
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
      <h1
        style={{
          backgroundColor: "yellow",
          fontSize: 16,
        }}
      >
        {name}
      </h1>
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