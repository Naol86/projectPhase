export default function Button({
  background,
  border,
  text,
  value,
}: {
  background?: string;
  border?: string;
  text?: string;
  value?: string;
}) {
  return (
    <button
      className={`py-1.5 px-2.5 mr-2 text-xs  rounded-2xl ${background} ${border} ${text} font-semibold min-w-14  inline-block`}
    >
      {value}
    </button>
  );
}
