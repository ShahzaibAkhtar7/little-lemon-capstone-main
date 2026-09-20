export default function MenuCard({ image, name, description, price }) {
  return (
    <article className="menu-card">
      <img src={image} alt="" />
      <div className="menu-card-content">
        <div className="menu-card-heading">
          <h3>{name}</h3>
          <span>{price}</span>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}
