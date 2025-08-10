import classes from "./holyGrail.module.scss";

export const HolyGrail = () => {
  return (
    <div className={classes.layout}>
      <header>Header</header>
      <div className={classes.mainLayout}>
        <nav className={classes.gridNav}>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
      <footer>Footer</footer>
    </div>
  );
};
