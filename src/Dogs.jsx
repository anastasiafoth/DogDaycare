import Dog from "./Dog";

export default function Dogs(props) {
  return (
    <div>
      {props.dogs.map((dog, index) => (
        <Dog dog={dog} key={index}/>
      ))}
    </div>
  );
}
