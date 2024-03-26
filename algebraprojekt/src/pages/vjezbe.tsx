import { LinkType } from "../types/main";

const vjezbeLinks: LinkType[] = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/charmander",
    label: "Charmander",
  },

  {
    href: "/germany",
    label: "Germany",
  },
  {
    href: "/pokemon",
    label: "Pokemon",
  },
  {
    href: "/profile-maker",
    label: "ProfileMaker",
  },
  {
    href: "/data-types",
    label: "DataTypes",
  },
];

const Vjezbe = () => {
  return (
    <>
      <h1>Popis vjezbi</h1>

      <div>
        {vjezbeLinks.map((link) => {
          return (
            <a className="link" key={link.href} href={link.href}>
              {link.label}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Vjezbe;
