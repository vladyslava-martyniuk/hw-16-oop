const baseSubscription = 40;
const familySubscription = 20;
const premiumSubscription = 80;

const getSubscription = (
  baseSubscription,
  familySubscription,
  premiumSubscription
) => {
  return baseSubscription + familySubscription + premiumSubscription;
};

console.log(
  getSubscription(baseSubscription, familySubscription, premiumSubscription)
);

const subscription = {
  baseSubscription: 40,
  familySubscription: 20,
  premiumSubscription: 80,
  getSubscription() {
    return (
      this.baseSubscription + this.familySubscription * this.premiumSubscription
    );
  },
};
console.log(subscription.getSubscription());

const fruits = { isTasty: true };
const feijoa = Object.create(fruits);
feijoa.color = "green";
for (const key in feijoa) {
  if (!feijoa.hasOwnProperty(key)) continue;
  console.log(key);
}
class Subscription {
  constructor(base, family, premium) {
    this.baseSubscription = base;
    this.familySubscription = family;
    this.premiumSubscription = premium;
  }
}

const sub = new Subscription(40, 20, 80);
console.log(sub);
