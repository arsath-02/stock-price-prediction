function AnalysisCard({ image, title, description, inference }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <p className="text-gray-500 italic">{inference}</p>
      </div>
    );
  }
  
  export default AnalysisCard;
  