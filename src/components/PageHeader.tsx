export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="m-10">
      <h3 className="mb-4 text-4xl font-semibold text-black md:text-md">
        {title}
      </h3>
      {subtitle && (
        <span className="text-sm font-light text-white md:text-2xl">
          {subtitle}
        </span>
      )}
    </div>
  );
}
