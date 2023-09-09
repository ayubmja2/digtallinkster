import clsx from "clsx";

const Card = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-2xl bg-white mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
