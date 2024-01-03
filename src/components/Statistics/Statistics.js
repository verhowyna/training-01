export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>.....{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
