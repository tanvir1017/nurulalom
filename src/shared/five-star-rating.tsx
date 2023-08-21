import { StarIcon } from "@heroicons/react/24/outline";

const FiveStarRating = () => {
  return (
    <>
      {[...Array(5).keys()].map((_) => (
        <div key={_}>
          <StarIcon
            strokeWidth={2.5}
            fill="#F0AD4E"
            className={`h-5 w-5 transition-transform  text-orange-300`}
          />
        </div>
      ))}
    </>
  );
};

export default FiveStarRating;
