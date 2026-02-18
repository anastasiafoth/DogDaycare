export default function Dog(props) {
  return (
    <div className="Dog">
      <img src={`https://placedog.net/300/200?id=${props.id+1}`} alt="dogPhoto" />
      <h3>{props.dog}</h3>
    </div>
  );
}
