export default function ServiceDetailPage({ params }) {
  const { category, slug } = params;

  return (
    <div>
      <h1>Service: {slug}</h1>
      <p>Category: {category}</p>
      {/* Fetch service by category + slug */}
    </div>
  );
}
