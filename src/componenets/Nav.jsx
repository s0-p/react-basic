function Nav({ data, OnChangeMode }) {
  console.log('Nav render');
  const lists = data.map((d) => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        data-id={d.id}
        onClick={(e) => {
          // console.log(e.target.dataset.id);
          e.preventDefault();
          OnChangeMode(Number(e.target.dataset.id));
        }}
      >
        {d.title}{' '}
      </a>
    </li>
  ));
  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}
export default Nav;
