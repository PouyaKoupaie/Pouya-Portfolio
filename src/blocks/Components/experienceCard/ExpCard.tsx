export default function ExpCard({
  title = " Uiverse",
  paragraphs = ["paragraph"],
}: {
  title?: string;
  paragraphs?: string[];
}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}
