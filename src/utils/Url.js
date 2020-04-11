import qs from "qs";
import get from "lodash/get";
import set from "lodash/set";
import keys from "lodash/keys";
import size from "lodash/size";
import omit from "lodash/omit";
import pick from "lodash/pick";
import unset from "lodash/unset";
import clone from "lodash/clone";

class Url {
  constructor(location) {
    this._location = location;
    this._parsedQuery = qs.parse(new URLSearchParams(this._location.search).toString());
  }

  getPathName() {
    return this._location.pathname;
  }

  getParam(key, defaultValue) {
    return get(this._parsedQuery, key, defaultValue);
  }

  setParam(key, value) {
    return set(this._parsedQuery, key, value);
  }

  deleteParam(key) {
    return unset(this._parsedQuery, key);
  }

  toObject(options = {}) {
    return this._getParams(options);
  }

  toString(options = {}) {
    const query = qs.stringify(this._getParams(options));

    return `${options.full && size(keys(query)) ? "?" : ""}${query}`;
  }

  _getParams(options) {
    let params = clone(this._parsedQuery);

    if (options.only) {
      params = pick(params, options.only);
    } else if (options.except) {
      params = omit(params, options.except);
    }

    return params;
  }
}

export default Url;
