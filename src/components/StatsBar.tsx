import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 2017, label: "Founded", prefix: "", suffix: "" },
  { value: 15, label: "Medical Specialties", prefix: "", suffix: "+" },
  { value: 10000, label: "Patients Served", prefix: "", suffix: "+" },
  { value: 24, label: "Hour Emergency Care", prefix: "", suffix: "/7" },
];

const StatItem = ({ value, label, prefix, suffix }: typeof stats[0]) => {
  const { count, ref } = useCountUp(value, value > 1000 ? 2500 : 2000);
  const display = value === 2017 ? count || "" : count.toLocaleString();

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <p className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground">
        {prefix}{display}{suffix}
      </p>
      <p className="font-body text-sm text-primary-foreground/70 mt-2">{label}</p>
    </div>
  );
};

const StatsBar = () => (
  <section className="bg-primary">
    <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  </section>
);

export default StatsBar;
