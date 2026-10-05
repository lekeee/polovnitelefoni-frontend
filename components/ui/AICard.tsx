type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function AICard({ title, description, icon }: Props) {
  return (
    <div className="flex flex-col rounded-2xl bg-white px-7 py-6 items-start gap-4">
      <div className="w-9.5 h-9.5 rounded-xs flex items-center justify-center bg-primary/16">
        {icon}
      </div>
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm opacity-60 leading-[auto] mt-2">{description}</p>
      </div>
    </div>
  );
}
