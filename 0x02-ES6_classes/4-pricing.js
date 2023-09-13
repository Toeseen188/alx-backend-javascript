import Currency from './3-currency';

const instanceCurrency = new Currency();

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency || instanceCurrency;
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, convertionRate) {
    return amount * convertionRate;
  }
}
