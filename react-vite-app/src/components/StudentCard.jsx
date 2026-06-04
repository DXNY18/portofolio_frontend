function StudentCard({ title, category, tools, highlight }) {
  return (
    <article className="card h-100">
      <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
        <h3 className="card-title mb-0">{title}</h3>
        <span className="badge text-bg-light">{category}</span>
      </div>

      <p className="mb-2">
        <strong>Fokus:</strong> {tools}
      </p>
      <p className="mb-0">
        <strong>Highlight:</strong> {highlight}
      </p>
    </article>
  );
}

export default StudentCard;
