export default class Building {
  constructor(sqft) {
    // if (new.target === Building) {
    // throw new Error('Can"t instantiate class Building');
    //    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  /* eslint-enable class-methods-use-this */
}
