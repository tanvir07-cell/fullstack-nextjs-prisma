interface Entry {
  id: string;
  content: string;
}

const EntryCard = ({ entry }: { entry: Entry }) => {
  return (
    <div>
      <div
        className="card w-96 bg-base-100 shadow-xl 
    "
      >
        <div className="card-body">
          <h2 className="card-title">{entry.id}!</h2>
          <p>{entry.content}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
