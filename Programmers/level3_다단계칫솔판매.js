function solution(enroll, referral, seller, amount) {
  const people = new Map();

  function spreadProfit(initProfit, fromName) {
    let sellerInfo = people.get(fromName);
    const incentive = Math.floor(initProfit * (10 / 100));
    if (sellerInfo.refer === "-") {
      sellerInfo.profit += initProfit - incentive;
      return;
    } else {
      if (initProfit < 1) {
        sellerInfo.profit += initProfit;
        return;
      } else {
        sellerInfo.profit += initProfit - incentive;
        spreadProfit(incentive, sellerInfo.refer);
      }
    }
  }

  for (let i = 0; i < enroll.length; i++) {
    people.set(enroll[i], { refer: referral[i], profit: 0 });
  }

  for (let i = 0; i < amount.length; i++) {
    spreadProfit(amount[i] * 100, seller[i]);
  }

  return [...people.values()].map((v) => v.profit);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);

// node level3_다단계칫솔판매
