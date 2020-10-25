const { shop } = require('../models');

class ShopService {
  async init() {}

  async find({ id, pageIndex = 0, pageSize = 10 }) {
    if (id) {
      return [await shop.findByPk(id)];
    }

    return await shop.findAll({
      offset: pageIndex * pageSize,
      limit: pageSize,
    });
  }

  async modify({ id, values }) {
    const target = await shop.findByPk(id);

    if (!target) {
      return null;
    }

    Object.assign(target, values);
    return await target.save();
  }

  async remove({ id }) {
    const target = await shop.findByPk(id);

    if (!target) {
      return false;
    }

    return target.destroy();
  }

  async create({ values }) {
    return await shop.create(values);
  }
}

// 单例模式
let service;
module.exports = async function () {
  if (!service) {
    service = new ShopService();
    await service.init();
  }
  return service;
};
