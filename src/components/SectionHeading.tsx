interface Props {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: Props) {
  return (
    <div className="mb-12">
      <span className="text-accent font-mono text-sm tracking-widest uppercase">{label}</span>
      <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 text-tx-primary">{title}</h2>
    </div>
  );
}
