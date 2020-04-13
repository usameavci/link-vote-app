import LocalDB from "local-db";
import head from "lodash/head";
import ceil from "lodash/ceil";
import orderBy from "lodash/orderBy";
import isObject from "lodash/isObject";
import limit from "json-function/dist/package/limit";

class Service {
  constructor(tableName) {
    this._tableName = tableName;
    this._table = new LocalDB(this._tableName);
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

    const now = new Date();
    const createdAt = now.getTime();
    const updatedAt = now.getTime();

    return this._table.insert({ ...payload, createdAt, updatedAt });
  }

  async update(query, payload) {
    if (!query || !payload) return false;

    const now = new Date();
    const updatedAt = now.getTime();

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
