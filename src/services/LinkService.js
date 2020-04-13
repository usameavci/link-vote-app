import map from "lodash/map";
import waterfall from "async/waterfall";

import Service from "./Service";

class LinkService extends Service {
  constructor() {
    super("links");
  }

  insertExampleData() {
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

    const stack = map(links, (link) => (cb) => this.create(link).then(() => setTimeout(cb, 100)));
    return new Promise((resolve) => waterfall(stack, (err, results) => resolve()));
  }
}

export default LinkService;
