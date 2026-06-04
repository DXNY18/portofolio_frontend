function ExperienceCard({ experience, onEdit, onDelete }) {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{experience.title}</h5>
        <span className="badge text-bg-info mb-3">{experience.category}</span>
        <h6 className="card-subtitle mb-2 text-muted">
          {experience.place} - {experience.year}
        </h6>
        <p className="card-text">{experience.description}</p>
        <div className="d-flex justify-content-between">
          <button onClick={onEdit} className="btn btn-warning btn-sm">
            Edit
          </button>
          <button onClick={onDelete} className="btn btn-danger btn-sm">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
