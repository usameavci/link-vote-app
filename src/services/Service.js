import LocalDB from "local-db";
import head from "lodash/head";
import ceil from "lodash/ceil";
import orderBy from "lodash/orderBy";
import isObject from "lodash/isObject";
import limit from "json-function/dist/package/limit";

class Service {
  constructor(tableName) {
    const hasTable = !!localStorage.getItem(tableName);

    this._tableName = tableName;
    this._table = new LocalDB(this._tableName);

    if (!hasTable) {
      this._createTable(this._table);
    }
  }

  async list(query = {}, { sort = ["createdAt"], order = ["desc"] }, { page = 1, perPage = 5 }) {
    const rawData = this._table.query(query);

    let data = orderBy(rawData, sort, order);
    data = limit(data, perPage, (page - 1) * perPage);

    const count = ceil(rawData.length / perPage);

    const meta = { current: page, perPage: 5, count, total: rawData.length };

    return { data, meta };
  }

  async create(payload) {
    if (!payload) return false;

    return this._table.insert({ ...payload, createdAt: new Date(), updatedAt: new Date() });
  }

  async update(query, payload) {
    if (!query || !payload) return false;
    const updatedAt = new Date();

    this._table.update(query, { ...payload, updatedAt });

    return head(this._table.query(query));
  }

  async delete(idOrQuery) {
    if (!isObject(idOrQuery)) {
      idOrQuery = { id: idOrQuery };
    }

    return this._table.delete(idOrQuery);
  }

  _createTable() {}
}

export default Service;
