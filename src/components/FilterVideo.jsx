const FilterVideo = () => {
  return (
    <div className="flex gap-3 mb-5">
      <button className="btn btn-outline btn-success no-animation btn-active">
        Semua
      </button>
      <button className="btn btn-outline btn-success no-animation">
        Terbaru
      </button>
      <button className="btn btn-outline btn-success no-animation">
        Populer
      </button>
    </div>
  );
};

export default FilterVideo;
