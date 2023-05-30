'use strict';

class Collection {
  constructor(model){
    this.model = model;
  }
  
  async read(id=null){
    try {
      if(id){
        const findOneRecord = await this.model.findByPk(id);
        return findOneRecord;

      } else {
        const records = await this.model.findAll();
        return records;
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  async create(data){
    try {
      const newRecord = await this.model.create(data);
      return newRecord;

    } catch (error) {
      console.error('we have a ModelInterface create error', error);
      return error;
    }
  }


  async update(data, id) {
    try {
      await this.model.update(data, {where: { id } });
    
      let updatedRecord = await this.model.findByPk(id);
      return updatedRecord;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id){
    try {
      let deletedRecord = await this.model.destroy({where:{ id }});

      return deletedRecord;
    } catch (error) {
      console.error(error);
    }
  }

}

module.exports = Collection;