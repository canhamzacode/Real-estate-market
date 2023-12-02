const PropertyCard = () => {
  return (
    <div className="p-[10px] bg-black/30  grid gap-2">
      <figure className="w-full h-[240px] bg-black">
        <img
          src="https://plus.unsplash.com/premium_photo-1701127871438-af582cdd8c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full"
        />
      </figure>
      <figcaption>
        <h3 className="text-xl font-bold">Hamzat Luxry</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          consequuntur sunt explicabo exercitationem eveniet quaerat, ipsa a
          dicta in vero ut molestiae incidunt voluptas quis molestias iure id,
          ratione aspernatur!
        </p>
      </figcaption>
    </div>
  );
};

export default PropertyCard;
