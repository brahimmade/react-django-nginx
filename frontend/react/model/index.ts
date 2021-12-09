import circles, { CirclesModel } from './circles';

export interface StoreModel {
  circles: CirclesModel;
}

const model: StoreModel = {
  circles,
};

export default model;
