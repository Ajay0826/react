export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button
      style={styles}
      className="border rounded-2xl w-15 h-15 text-2xl font-bold border-gray-200 shadow-xl "
      onClick={props.hold}
    >
      {props.value}
    </button>
  );
}
