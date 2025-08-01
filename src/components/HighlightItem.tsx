export const HighlightItems: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <span className=" uppercase text-sm">{title}</span>
      <p className=" text-2xl">{content}</p>
    </div>
  );
};
