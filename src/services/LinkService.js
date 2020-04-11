import each from "lodash/each";

import Service from "./Service";

class LinkService extends Service {
  constructor() {
    super("links");
  }

  _createTable(table) {
    const links = [
      {
        title: "Google",
        url: "https://google.com",
        vote: 0,
      },
      {
        title: "Stackowerflow",
        url: "https://stackoverflow.com",
        vote: 0,
      },
      {
        title: "Github",
        url: "https://github.com",
        vote: 0,
      },
      {
        title: "Linkedin",
        url: "https://linkedin.com",
        vote: 0,
      },
      {
        title: "Facebook",
        url: "https://facebook.com",
        vote: 0,
      },
      {
        title: "Twitter",
        url: "https://twitter.com",
        vote: 0,
      },
      {
        title: "Pluralsight",
        url: "https://www.pluralsight.com/",
        vote: 0,
      },
      {
        title: "React Training",
        url: "https://reacttraining.com/",
        vote: 0,
      },
      {
        title: "Whatsapp",
        url: "https://whatsapp.com",
        vote: 0,
      },
    ];

    each(links, link => table.insert(link));
  }
}

export default LinkService;
