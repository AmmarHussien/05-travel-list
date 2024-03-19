export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Add Some Items To Your Packing List 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "You Got Everything! Ready to go ✈️"
          : ` You have ${numItems} items on your list, and you already packed
          ${numPacked} (${precentage}%) 🚀`}
      </em>
    </footer>
  );
}
