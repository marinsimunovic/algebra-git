import { vjezbeLinks } from "../data/vjezbe";

const Vjezbe = () => {
  return (
    <>
      <div className="Vjezbe-layout">
        <h1>Popis vježbi</h1>
        <div>
          {vjezbeLinks.map((link) => {
            return (
              <a className="link" key={link.href} href={link.href}>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Vjezbe;
